---
title: "Increasing Array - Introductory - CSES Problem Set"
description: "Solución al problema Increasing Array de la sección Introductory de CSES Problem Set"
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

El sitio lo podrás encontrar [aquí](https://cses.fi/problemset/). La guía de problemas está dividida en $$11$$ secciones, y cada una de ellas tiene una serie de problemas que se van volviendo más complejos a medida que avanzas. En este post, vamos a ver el primer problema de la guía, llamado _Increasing Array_.

## Enunciado del problema

El enunciado del problema es el siguiente:

> _Te dan una secuencia de $$n$$ enteros. Quieres modificar el arreglo para que sea creciente, es decir, cada elemento debe ser al menos tan grande como el elemento anterior._
>
> _En cada movimiento puedes aumentar el valor de cualquier elemento en $$1$$. ¿Cuál es el número mínimo de movimientos que se necesitan?_
>
> _Tener en cuenta que los números van hasta $$10^9$$._

## Solución del problema

Primero, lo que tenemos que tener en cuenta es que se nos pide que el arreglo sea creciente no estricto, es decir, no decreciente (puede haber elementos iguales).

Además, otra cosa a notar es que la única acción válida que podemos realizar es sumar $$1$$ a un elemento. Luego, si queremos que el arreglo sea no decreciente, simplemente tenemos que asegurarnos de que cada elemento sea mayor o igual que el anterior. Si un elemento es menor que el anterior, entonces tendríamos que sumarle $$1$$ a ese elemento hasta que sea igual que el anterior (porque nos piden el mínimo número de movimientos). Caso contrario, si el elemento es mayor o igual que el anterior, no tenemos que hacer nada.

Para hacer esto, iteramos por todos los números y comparamos (desde el 2do en adelante) con el anterior para ver cuánto tenemos que sumarle. Algo a tener en cuenta es que la comparación no es necesariamente con el valor anterior que leímos del input sino que es con el valor modificado (i.e., en caso de tener que haber sumado, se va a considerar ese nuevo valor como elemento anterior).

La solución es $$O(n)$$ en tiempo y $$O(1)$$ en espacio.

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

  long long ans = 0;
  int ant = -1;
  for (int i = 0; i < n; i++)
  {
    int x, new_ant;
    cin >> x;
    new_ant = x;

    if (ant != -1)
    {
      int diff = max(0, ant - x);
      ans += diff;
      new_ant += diff;
    }

    ant = new_ant;
  }

  cout << ans << '\n';

  return 0;
}
```
