---
title: "Repetitions - Introductory - CSES Problem Set"
description: "Solución al problema Repetitions de la sección Introductory de CSES Problem Set"
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

El sitio lo podrás encontrar [aquí](https://cses.fi/problemset/). La guía de problemas está dividida en $$11$$ secciones, y cada una de ellas tiene una serie de problemas que se van volviendo más complejos a medida que avanzas. En este post, vamos a ver el primer problema de la guía, llamado _Repetitions_.

## Enunciado del problema

El enunciado del problema es el siguiente:

> _Te dan una secuencia de ADN: un string que consiste solo de caracteres $$A$$, $$C$$, $$G$$ y $$T$$. Tu tarea es encontrar la mayor repetición en la secuencia.
> Esto es la mayor longitud de un substring que contiene solo un tipo de carácter_.

## Solución del problema

Para resolver este problema lo primero que tenemos que tener en cuenta y notar es que no nos importa que la secuencia tenga solo esos tipos de letra, es indiferente. Lo único que queremos ver es la mayor repetición de un carácter en la secuencia de forma contigua.

Por ello mismo, lo que tenemos que contar es los tamaños de todos los substrings que contengan solo un tipo de carácter, y luego quedarnos con el máximo de todos ellos.

Esto lo podemos hacer tranquilamente en $$O(n)$$ (siendo $$n$$ el tamaño de la cadena inicial) iterando sobre la cadena y contando la cantidad de caracteres iguales que hay seguidos. Consideramos como inicio que ya contamos el primer carácter, por lo que iniciamos con una longitud de $$1$$.

Luego, entonces, la iteración se comienza desde el 2do elemento (índice $$1$$). Aquí tenemos que tener en cuenta dos casos:

- Si el carácter actual es igual al anterior, entonces aumentamos la longitud actual en $$1$$.
- Si el carácter actual es distinto al anterior, entonces nos quedamos con el máximo entre la longitud actual y la longitud máxima, y reiniciamos la longitud actual a $$1$$.

Para poder realizar todo dentro de la iteración, agregamos un carácter al final de la cadena que sea distinto al último carácter de la cadena original (en este caso, `$`). Esto es para que, al llegar al último carácter, se cumpla el segundo caso y se pueda guardar el máximo.

El código de la solución es el siguiente:

```cpp
#include <bits/stdc++.h>

using namespace std;

int main()
{
  ios::sync_with_stdio(0);
  cin.tie(0);

  string s;
  cin >> s;

  s += '$';
  int max_length = 1, act_length = 1;
  for (int i = 1, sz = int(s.size()); i < sz; i++)
  {
    if (s[i] != s[i - 1])
    {
      max_length = max(max_length, act_length);
      act_length = 1;
    }
    else
    {
      act_length++;
    }
  }

  cout << max_length << '\n';

  return 0;
}
```
