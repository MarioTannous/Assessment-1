Academy Assessment 1 – JavaScript/Typescript Challenges
This repository contains answers to a series of JavaScript/TypeScript challenges designed to test various other aspects of programming, algorithm development, and data structures. 
Each challenge centers implementing a function or class to solve specific problems, thereby helping you practice core programming concepts.
Table of Contents
•	Introduction
•	Challenges
•	Technologies Used
•	Installation
•	Usage
•	Contributing
•	License
Introduction
This repository is aimed at providing a solution set for some JavaScript/TypeScript challenges directed at testing and enhancing one's coding skills. 
The challenges test candidates on basic and advanced topics like string manipulation, object comparisons, and caching implementation. 
By overcoming these challenges, you will embrace JavaScript/TypeScript with a greater depth of understanding in relation to standard algorithmic patterns.
Challenges
1. Reverse a String
•	Function: reverseString(str: string): string
•	Description: Reverses the given string and returns the reversed version.
•	Example:
reverseString("hello"); // "olleh"
2. Count Vowels
•	Function: countVowels(str: string): number
•	Description: Counts the number of vowels (a, e, i, o, u) in the string.
•	Example:
countVowels("typescript"); // 3
3. Find the Missing Number
•	Function: findMissingNumber(arr: number[]): number
•	Description: Identifies the missing number in a sequence of numbers from 1 to N.
•	Example:
findMissingNumber([1, 2, 4, 5, 6]); // 3
4. Find the First Non-Repeating Character
•	Function: firstNonRepeatingChar(str: string): string | null
•	Description: Returns the first non-repeating character in the given string.
•	Example:
firstNonRepeatingChar("swiss"); // "w"
5. Deep Object Comparison
•	Function: deepEqual(obj1: any, obj2: any): boolean
•	Description: Compares two objects deeply to check for equality.
•	Example:
deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }); // true
6. LRU Cache Implementation
•	Class: LRUCache
•	Description: Implements an LRU (Least Recently Used) cache with methods get(key) and put(key, value) to manage cached values.
•	Example Usage: 
•	const cache = new LRUCache(2);
•	cache.put(1, 1);
•	cache.put(2, 2);
•	cache.get(1); // 1
•	cache.put(3, 3); // Removes key 2
•	cache.get(2); // null
7. TypeScript Task Manager
•	Class: TaskManager
•	Description: Manages tasks with functionality to add tasks, mark them as complete, and display them.
•	Example Usage: 
•	const taskManager = new TaskManager();
•	taskManager.addTask("Learn TypeScript");
•	taskManager.completeTask(1);
•	taskManager.displayTasks(); // Task ID: 1, Name: "Learn TypeScript", Status: Completed
Technologies Used
•	JavaScript
•	TypeScript
License
This project is open-source and available under the MIT License.

