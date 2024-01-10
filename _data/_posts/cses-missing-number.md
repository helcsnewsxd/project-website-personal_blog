---
title: "Missing Number - Introductory - CSES Problem Set"
description: "Solución al problema Missing Number de la sección Introductory de CSES Problem Set"
date: "2024/01/10"
picture: "cses"
author:
  name: "Emanuel Nicolás Herrador"
  picture: "ema"
type: "Programación Competitiva"
tags: ["CSES", "CSES Problemset", "Introductory section", "C++", "Práctica"]
---

## Introducción a la guía de problemas de CSES

¡Hola!

En este sitio podrás encontrar una serie de posts dedicados exclusivamente a la solución y explicación de los diversos problemas de la guía de CSES Problem Set. La idea es que puedas encontrar una explicación detallada de cada uno de los problemas, y que puedas entenderlos de una manera sencilla y rápida.

El sitio lo podrás encontrar [aquí](https://cses.fi/problemset/). La guía de problemas está dividida en $$11$$ secciones, y cada una de ellas tiene una serie de problemas que se van volviendo más complejos a medida que avanzas. En este post, vamos a ver el primer problema de la guía, llamado _Missing Number_.

## Enunciado del problema

El enunciado del problema es el siguiente:

> _Considera un conjunto de $$n-1$$ enteros distintos en el rango $$[1,n]$$. Tu tarea es encontrar el número que falta en el conjunto_.

## Solución del problema

Para resolver este problema, lo que tenemos que hacer es guardar los números en un vector, ordenarlo a este mismo y luego ir iterándolo para ver en qué índice no se matchea con el elemento que debería estar ahí. Ese índice es el número que falta.

En este caso, el índice (`ans`) comienza desde $$1$$ dado que los elementos que nos dan están en el rango $$[1,n]$$.

El código de la solución es el siguiente:

```cpp
#include <bits/stdc++.h>

using namespace std;

int main()
{
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n;
  cin >> n;

  vector<int> v(n - 1);
  for (int i = 0; i < n - 1; i++)
    cin >> v[i];

  sort(v.begin(), v.end());

  int ans = 1;
  for (auto x : v)
  {
    if (x != ans)
      break;
    ans++;
  }

  cout << ans << '\n';

  return 0;
}
```
