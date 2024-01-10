---
title: "Weird Algorithm - Introductory - CSES Problem Set"
description: "Solución al problema Weird Algorithm de la sección Introductory de CSES Problem Set"
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

El sitio lo podrás encontrar [aquí](https://cses.fi/problemset/). La guía de problemas está dividida en $$11$$ secciones, y cada una de ellas tiene una serie de problemas que se van volviendo más complejos a medida que avanzas. En este post, vamos a ver el primer problema de la guía, llamado _Weird Algorithm_.

## Enunciado del problema

El enunciado del problema es el siguiente:

> _Considera un algoritmo que toma un número $$n$$ como entrada y realiza lo siguiente:_
>
> - _Si $$n$$ es par, se divide por $$2$$._
> - _Si $$n$$ es impar, se multiplica por $$3$$ y se le suma $$1$$._
>
> _El algoritmo se repite hasta que $$n$$ sea $$1$$. Por ejemplo, la secuencia para $$n=3$$ es la siguiente:_
>
> $$$3 \rightarrow 10 \rightarrow 5 \rightarrow 16 \rightarrow 8 \rightarrow 4 \rightarrow 2 \rightarrow 1$$$
>
> _Tu tarea es simular el funcionamiento del algoritmo para una entrada dada_.

## Solución del problema

Para este problema lo que tenemos que hacer es simular el procedimiento que se nos indica en el mismo enunciado.

En este caso, es un problema muy simple pero que requiere tener en cuenta los casos bordes y los overflows dado que el número de la simulación puede crecer mucho, hasta tal punto de no entrar dentro de `int`. Por ello mismo, el `n` debe ser un `long long`. Así mismo, en el código de la solución se usan las sentencias `ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);` para hacer que la entrada y salida de datos sea más rápida y no se genere un buffer overflow.

El código de la solución es el siguiente:

```cpp
#include <bits/stdc++.h>

using namespace std;

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);

  long long n;
  cin >> n;

  while (n != 1)
  {
    cout << n << ' ';
    n = (n % 2 == 0 ? n / 2 : 3 * n + 1);
  }

  cout << "1\n";

  return 0;
}
```
