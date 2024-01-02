---
title: "Punto de partida: Descubriendo la Programación Competitiva."
description: "Resolviendo problemas del contest Hello 2024 de Codeforces"
date: "2024-01-02"
picture: "codeforces"
author:
  name: "Emanuel Nicolás Herrador"
  picture: "ema"
type: "Programación Competitiva"
tags: ["Codeforces", "C++", "Contest"]
---

# Titulo

![alt text](https://codeforces.org/s/15654/images/codeforces-sponsored-by-ton-ny.png "Logo Title Text 1")

## Enlace

[Hello 2024](https://codeforces.com/contest/1567)

## List

- [x] A
- [x] B
- [x] C
- [] D
- [] E
  - [] F

1. A
2. B
3. C
4. D
5. E
   1. F
   2. G
6. Buenas

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define endl "\n"
#define forn(i, a, b) for (int i = a; i < b; i++)
#define forr(i, a, b) for (int i = a; i > b; i--)
#define pb push_back
#define mp make_pair
#define ff first
#define ss second
#define vi vector<int>
#define vll vector<ll>
#define pii pair<int, int>
#define pll pair<ll, ll>
#define all(v) v.begin(), v.end()
#define allr(v) v.rbegin(), v.rend()
#define MOD 1000000007
#define INF 1e18
#define EPS 1e-9
#define PI 3.1415926535897932384626433832795

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        int a[n];
        forn(i, 0, n)
        {
            cin >> a[i];
        }
        int ans = 0;
        forn(i, 0, n - 1)
        {
            int mn = min(a[i], a[i + 1]);
            int mx = max(a[i], a[i + 1]);
            while (mn * 2 < mx)
            {
                mn *= 2;
                ans++;
            }
        }
        cout << ans << endl;
    }
    return 0;
}
```

`sdfdsf`

This is an inline code: `echo "Hello World"`

## Blockquotes

> Blockquotes are very handy in email to emulate reply text.

> This line is part of the same quote.
>
> > Bueno

Quote break.

## Table

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |
