---
sidebar_position: 1
---

# System Overview

## Project Abstract

The Smart Mirror project aims to develop an innovative and interactive mirror with embedded technology to enhance the daily lives of users. This mirror will serve as more than just a reflective surface; it will provide real-time information, personalized content, and an interactive user experience.
The Smart Mirror will incorporate features such as displaying the time, date, and weather forecast, as well as enabling users to access their calendar, news headlines, and fitness data. Users will have the option to customize the mirror's interface and choose from various widgets to display information relevant to their daily routine.
This project seeks to create a seamless integration of technology into the everyday routines of users, making their morning routines more efficient and keeping them informed throughout the day. It will utilize cutting-edge hardware and software to achieve its objectives, providing an elegant and functional addition to any modern home.

## Background

Traditional mirrors serve a singular purpose: reflection. In contrast, the Smart Mirror project aims to transform this everyday object into a multifunctional, intelligent device. The concept of smart mirrors is not entirely new, with some commercial products available on the market, but these often come at a high cost and lack customization options.
The Smart Mirror project seeks to address these limitations by offering an affordable, open-source solution that can be tailored to individual preferences. By utilizing readily available components such as a two-way mirror, a high-resolution display, a Raspberry Pi, and various sensors, this project aims to create a cost-effective and accessible smart mirror.
The motivation behind this project is to provide users with a valuable addition to their homes that can streamline their daily routines and keep them informed. Whether it's checking the weather while getting dressed, reviewing their schedule before leaving the house, or receiving the latest news updates, the Smart Mirror aims to make these tasks effortless and integrated into the mirror itself.
By providing an open-source platform, this project also encourages further innovation in the field of smart mirrors, allowing developers and hobbyists to contribute to its growth and customization. In summary, the Smart Mirror project represents a fusion of technology and everyday life, enhancing user experiences and setting the stage for future advancements in smart home devices.

## Conceptual Design 

The Smart Mirror and Companion App system is a unique combination of hardware and software that is designed to upgrade the concept of a mirror into an adaptable and interactive smart home device. Our Smart Mirror app integrates hardware, including a Raspberry Pi, two-way mirror, display panel, camera, and microphone, with a software stack featuring Python and Java. The mirror's functions are controlled by a custom application on the Raspberry Pi, which also enables user interactions. Voice recognition technology like Azure is integrated with voice commands. We incorporate the Open Weather API to display real-time weather information on the mirror, providing a seamless and user-friendly experience. In addition to this, we utilize Next.js for front-end development, creating a dynamic and responsive UI with real-time updates and interactive features. 

## General Overview of Architecture

The architecture of our Smart Mirror system contains three core components: the backend, the frontend, and the database. The backend handles data processing, user management, and external service communication through APIs. It serves as the center hub that corresponds to data and provides a smooth user experience. The front end is represented by a web application that provides the user interface and interaction. Users can customize their mirror, give voice commands, and access current information. Finally, the database enhances personalization by storing user profiles, preferences, and widget configurations.
