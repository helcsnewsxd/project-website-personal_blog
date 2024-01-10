---
title: "Permutations - Introductory - CSES Problem Set"
description: "Solución al problema Permutations de la sección Introductory de CSES Problem Set"
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

El sitio lo podrás encontrar [aquí](https://cses.fi/problemset/). La guía de problemas está dividida en $$11$$ secciones, y cada una de ellas tiene una serie de problemas que se van volviendo más complejos a medida que avanzas. En este post, vamos a ver el primer problema de la guía, llamado _Permutations_.

## Enunciado del problema

El enunciado del problema es el siguiente:

> _Una permutación de enteros $$1,2,\ldots,n$$ es llamada **hermosa** si no hay elementos adyacentes cuya diferencia sea $$1$$._
>
> _Dado un entero $$n$$, construye una permutación hermosa si es que esta existe (cualquiera). Caso contrario, imprime "NO SOLUTION"._

## Solución del problema

La solución de este problema es por simple observación.

Lo primero que notamos es que si tenemos $$1$$ solo número, la respuesta es, obviamente ese mismo número ya que no tiene adyacentes. Luego, si tenemos $$2$$ o $$3$$ números la respuesta es "NO SOLUTION" ya que no hay forma de que no haya adyacentes cuya diferencia sea $$1$$.

Ahora, si tenemos $$4$$ o más números, podemos darnos cuenta que la respuesta **siempre** va a existir dado que podemos simplemente intercalar los números pares y los impares. Para ello, consideramos primero poner la secuencia de números pares en orden creciente y luego la de impares en orden creciente. Eso nos permite que cada elemento tenga como mínimo un adyacente de diferencia $$2$$.

Por ejemplo, si tenemos $$n=5$$, la respuesta sería $$2,4,1,3,5$$.

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

  if (n == 2 || n == 3)
  {
    cout << "NO SOLUTION\n";
    return 0;
  }

  for (int i = 2; i <= n; i += 2)
    cout << i << ' ';
  for (int i = 1; i <= n; i += 2)
    cout << i << ' ';
  cout << '\n';

  return 0;
}
```
