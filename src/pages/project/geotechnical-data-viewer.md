---
title: Geotechnical Data Viewer
img: /geoViewer.png
client: NIOSH
startDate: 2022
description: Web-based 3D visualization for massive geotechnical data sets
featured: true
color: "primary"
tags:
  - BabylonJS
  - React
  - AssImp
layout: ../../layouts/project.astro
---
This was one of the more fun projects I have worked on. The National Institute for Occupational Safety and Health has been exploring some projects around allowing mines to better utilize their ever-increasing arrays of geotechnical data to drive safety in their operations. The primary goal of this project was to conduct a sweeping analysis of the various file formats that mining software uses to represent underground workings and then determine if there was a way to bridge data from those applications and blend it was geolocated geotechnical data. 

The lion’s share of the work was dedicated to working with the various mine design software vendors to determine what the capabilities of their software were and then determine where that overlapped with available 3D file formats that could be used to pull in the data for analysis. I had some time left at the end of the project so I decided to make a demo application that would allow the NIOSH team to ingest data from any of the major mine software companies and then render it alongside millions of points of geotechnical data at 60 FPS. The project was the first chance I’d had to use Election to build a native application and it performed excellently.