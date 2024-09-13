// Meeting Schedule II



// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), find the minimum number of days required to schedule all meetings without any conflicts.









/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 0) return 0;

        // Sort intervals by start time
        intervals.sort((a, b) => a.start - b.start);

        let stack = [];  // This will act as our "rooms"
        let roomsCount = 0;  // To keep track of the minimum number of rooms needed

        // Go through each interval
        for (let interval of intervals) {
            // Remove meetings from the stack that have already ended
            // We will "free" the rooms by checking if the last meeting's end time is <= the current meeting's start time
            while (stack.length > 0 && stack[stack.length - 1] <= interval.start) {
                stack.pop();  // Remove the meeting that has ended
            }

            // Add the current meeting's end time to the stack
            stack.push(interval.end);

            // Update the room count to reflect the maximum number of concurrent meetings
            roomsCount = Math.max(roomsCount, stack.length);
        }

        return roomsCount;
    }
}
