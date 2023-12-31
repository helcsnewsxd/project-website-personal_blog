---
title: "Cyclic Substrings"
description: "Problema C del contest The 2023 ICPC Asia Hefei Regional Contest (The 2nd Universal Cup. Stage 12: Hefei)"
coverImage: "https://codeforces.org/s/15654/images/codeforces-sponsored-by-ton-ny.png"
date: "2023-12-31"
author:
  name: "Emanuel Nicolás Herrador"
  picture: ""
type: "Programación Competitiva"
tags: ["Codeforces", "Strings", "Palindromic Tree", "Tag 1"]
---

We can solve this problem using the _Palindromic Tree Structure_. For more information, you can read [this](https://www.geeksforgeeks.org/palindromic-tree-introduction-implementation/).

The idea is init the palindromic structure using the string $$s + s$$ and only consider the palindromes that ends in the second half of the string (this let us to avoid count twice the same palindromes not cyclics).

Then, we've to calculate the real quantities for every node in the structure, from the leaves to the root and adding to the link node the quantity of the current node.

Finally, we can calculate the answer for every node using the real quantity and only if the length is $$\leq n$$ (because the maximum length of a cyclic or not cyclic substring is $$n$$).

Note: we've to calculate with MOD operations in every step.

The solution is [here](./codes/C.cpp)
