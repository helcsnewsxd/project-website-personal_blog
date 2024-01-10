---
title: "Number Spiral - Introductory - CSES Problem Set"
description: "Solución al problema Number Spiral de la sección Introductory de CSES Problem Set"
date: "2024/01/10"
picture: "cses"
author:
  name: "Emanuel Nicolás Herrador"
  picture: "ema"
type: "Programación Competitiva"
tags:
  [
    "CSES",
    "Introductory section",
    "Maths",
    "C++",
    "Práctica",
    "CSES Problemset",
  ]
---

## Introducción a la guía de problemas de CSES

¡Hola!

En este sitio podrás encontrar una serie de posts dedicados exclusivamente a la solución y explicación de los diversos problemas de la guía de CSES Problem Set. La idea es que puedas encontrar una explicación detallada de cada uno de los problemas, y que puedas entenderlos de una manera sencilla y rápida.

El sitio lo podrás encontrar [aquí](https://cses.fi/problemset/). La guía de problemas está dividida en $$11$$ secciones, y cada una de ellas tiene una serie de problemas que se van volviendo más complejos a medida que avanzas. En este post, vamos a ver el primer problema de la guía, llamado _Number Spiral_.

## Enunciado del problema

El enunciado del problema es el siguiente:

> _Una espiral numérica es una grilla infinita cuya celda superior izquierda tiene el número $$1$$._
>
> _Aquí están los primeros cinco niveles de la espiral:_
>
> |     |     |     |     |     |
> | --- | --- | --- | --- | --- |
> | 1   | 2   | 9   | 10  | 25  |
> | 4   | 3   | 8   | 11  | 24  |
> | 5   | 6   | 7   | 12  | 23  |
> | 16  | 15  | 14  | 13  | 22  |
> | 17  | 18  | 19  | 20  | 21  |
>
> _Tu tarea es encontrar el número en la fila $$y$$ y la columna $$x$$._
>
> _**Cotas**_:
>
> - $$1 \leq t \leq 10^5$$
> - $$1 \leq y, x \leq 10^9$$

## Solución del problema

Este problema requiere observación y algo de matemática simple.

Si observamos la espiral, podemos notar que los números en las diagonales tienen un patrón en su diferencia. Consideremos los números de los primeros cinco niveles:

$$$1, 3, 7, 13, 21$$$

Si restamos cada número con el anterior, obtenemos:

$$$2, 4, 6, 8$$$

Es decir, los números de las diagonales tienen una diferencia de $$2, 4, 6, 8, \dots$$

Ahora, ¿esto lo podemos extender para _todos_ los números en las diagonales? Sí. Si consideramos el número en la posición $$k, k$$, entonces podemos notar que para sumar y llegar a uno de los bordes, debemos sumar $$k - 1$$ veces. Luego, para llegar al siguiente número en la diagonal, debemos sumar $$k + 1$$ veces. Luego, entonces, el número en la posición $$k+1, k+1$$ es $$num_{k, k} + 2\times k$$.

Ahora, notemos que si observamos solo estas diferencias, podemos notar que estas aumentan de a $$2$$ para cada número (dado que dependen de la distancia de la celda diagonal al borde), teniendo una diferencia de $$2, 4, 6, 8, 10, 12, 14, 16, \dots$$.

Teniendo esto en cuenta, entonces, es fácil saber cuál es el número en la posición $$k, k$$, dado que es igual a:

$$$\begin{aligned}1 + \text{suma de las diferencias}  &= 1 + [2 + 4 + \dots + 2\times (k-1)]\\&= 1 + 2\times (1 + 2 + \dots + k-1)\\&= 1 + 2\times (k-1)\times\frac{k}{2}\\&= 1 + (k-1)\times k \text{ por suma de Gauss}\end{aligned}$$$

Luego, entonces, nos queda ver el caso general: _¿qué pasa si me dan una celda cualquiera? ¿Para qué me sirve saber el número en la diagonal?_

Bueno, para resolver esta interrogante, podemos notar que si nos dan una celda cualquiera, entonces calcular el número de su correspondiente elemento de la diagonal es sencillo dado que es el que tiene como coordenadas igual al máximo entre la fila y la columna. Luego, entonces, desde esta celda, obtener el número que buscamos es fácil dado que simplemente hay que restar o sumar, según corresponda, la diferencia entre las coordenadas de la celda y las coordenadas del elemento de la diagonal (i.e., la diferencia entre las mismas coordenadas de la celda que me piden).

Dado esto, entonces, simplemente nos queda saber cuándo sumar y cuándo restar. Para ver ello, nos podemos guiar con el ejemplo de la espiral que nos dan en el enunciado. Si notamos, al ser una espiral, entonces, tenemos que:

> |         | Crece | Decrece | Crece | Decrece | Crece |
> | ------- | ----- | ------- | ----- | ------- | ----- |
> | Decrece | 1     | 2 ↓     | 9 ↑   | 10 ↓    | 25 ↑  |
> | Crece   | 4 ←   | 3 ↲     | 8 ↑   | 11 ↓    | 24 ↑  |
> | Decrece | 5 →   | 6 →     | 7 ⮥   | 12 ↓    | 23 ↑  |
> | Crece   | 16 ←  | 15 ←    | 14 ←  | 13 ↲    | 22 ↑  |
> | Decrece | 17 →  | 18 →    | 19 →  | 20 →    | 21 ⮥  |

- Si tenemos que movernos por la columna, entonces sumamos cuando la columna es impar y restamos cuando la columna es par.
- Si tenemos que movernos por la fila, entonces sumamos cuando la fila es impar y restamos cuando la fila es par.

Finalmente, entonces, la solución se encuentra realizando esta cuenta:

$$$\begin{aligned}[1+(n-1)\times n]\pm d\\ \text{donde }n=max_{x,y},\text{ }d=max_{x,y}-min_{x,y}\end{aligned}$$$

y donde el signo se decide según lo explicado anteriormente.

La solución es $$O(1)$$ en tiempo y $$O(1)$$ en espacio para cada test. Es decir, la complejidad total es $$O(t)$$ en tiempo y $$O(1)$$ en espacio, donde $$t$$ es la cantidad de tests.

El código de la solución es el siguiente:

```cpp
#include <bits/stdc++.h>

using namespace std;

int main()
{
  ios::sync_with_stdio(0);
  cin.tie(0);

  int t;
  cin >> t;

  while (t--)
  {
    long long y, x;
    cin >> y >> x;

    long long n = max(y, x), d = n - min(y, x);
    long long num_n = 1 + (n - 1) * n;

    bool sum = ((n == x && x % 2 == 1) || (n == y && y % 2 == 0));

    cout << num_n + d * (sum ? 1 : -1) << '\n';
  }

  return 0;
}
```
