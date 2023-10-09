---
sidebar_position: 1
---

# System Overview

## Project Abstract

Traditional mirrors serve a singular purpose: reflecting our physical appearances. However, they remain underutilized in providing value beyond this basic function. In an increasingly connected world, individuals seek efficient and personalized ways to access information and streamline their daily routines. The absence of smart, interactive mirrors in our homes represents an untapped potential for enhancing daily life. As a solution, such mirrors already exist.

However, many of these mirrors lack usability for non-tech-savvy individuals. The Smart Mirror project aims to develop an innovative and interactive mirror that focuses on ease of use and simplicity with embedded technology, integrating seamlessly into the lives of users. Smart Mirror will provide real-time information, personalized content, and an interactive user experience. It will display not only the time, date, and weather forecast but also enable users to access their calendars, check news headlines, monitor their fitness data, and many other modules.

Furthermore, the Smart Mirror will offer customization options, allowing users to tailor its interface and choose from various widgets to display information relevant to their unique routines. By leveraging cutting-edge hardware and software, this project will create a functional and elegant addition to modern homes. Smart Mirror project seeks to bridge the gap between traditional mirrors and the digital age, addressing the need for efficient and personalized information access in our daily lives.

## Background

The Smart Mirror project is similar to other tools such as [MagicMirror](https://docs.magicmirror.builders/). These tools are tedious and difficult to set up for users who are not tech-savvy. Because of this, Smart Mirror aims to build on top of other projects, by including an in-built functional "app store" in the companion PWA (progressive web app) to install open-source modules with the tap of a button. Smart Mirror aims to differentiate itself through its ease of use.

## Conceptual Design 

The Smart Mirror display will be handled using a `Raspberry Pi` due to its simple and lightweight design. Smart Mirror will use computer vision via `OpenCV` to detect when a user steps in front of the mirror, and then data will be sent to our frontend where we can display the user's modules/widgets and miscellaneous information. Our PWA will be present for users to change features on the mirror in real time.
