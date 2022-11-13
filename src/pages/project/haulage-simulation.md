---
title: Haulage Simulation
img: /terrainGraph.png
client: Rio Tinto
startDate: 2011
description: Creating simulation software with 3D visualization within Excel
featured: false
color: "secondary"
tags:
  - simulation
  - Excel
  - VBA
layout: ../../layouts/project.astro
---
Some folks at Rio Tinto Technology & Innovations caught wind of my work at Boron and wanted my help simulating the haulage networks at their Oyo Tolgoi mine. Rio Tinto, at the time, had internal simulation tools but they were meant to be used to model existing sites, not on theoretical operations. At the time, Oyu Tolgoi was under development, so I ended up programming my simulation software in Microsoft Excel using VBA to handle the task. The simulations could take in (X, Y, Z) coordinates of haulage networks, operating distributions (e.g. load sizes, queue times, etc.), and rimpull curves for different fleets. It would figure out how to route equipment between different locations, model the interactions between equipment, dynamically determine equipment speeds, and provide 3D visualizations of the equipment moving through the haulage network.
