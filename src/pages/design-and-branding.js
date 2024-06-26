import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';
import Review from '../components/sections/review';
import ServiceHeader from '../components/sections/serviceheader';
import ServiceBody from '../components/sections/servicebody';
import ServiceContact from '../components/servicecontact';
import NewServiceBodyLeft from '../components/sections/newservicebody';
import ServiceBlogs from '../components/sections/serviceblogs';
import { DesignSlider } from '../components/sections';

const icon = [
  {
    src: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="prefix__e3c0a9aa-8189-4ea6-985e-33b5cbb75b39"
        data-name="Layer 1"
        viewBox="0 0 770.25 648.26"
      >
        <defs>
          <style>
            {
              '.prefix__e37b8c93-2f5e-4a6b-aae8-04c5d7280557{fill:#fbe100}.prefix__f1f90117-83a2-45a4-bf56-a258ded210d0{fill:#2ba5a2}'
            }
          </style>
        </defs>
        <path
          className="prefix__e37b8c93-2f5e-4a6b-aae8-04c5d7280557"
          d="M365.7 594.22s23.66-9.53 33.36 15.86v21.11s-13.76 8.34-32.78 2.57z"
        />
        <path
          d="M382.18 593.26l-.5-1v-1.66l-1.05-.58-1.28-.47-.94-1.17h-2.1l-2.59-4.38-.67 1.44-.7-.12-2.57 3.85-1.28 5.48-1.4 2.35 1.4 24.15 3.15 16.68 6.18 6.3 4.34 1.93s.79.29.68-4.73c0 0 .58-1.52.93-.12 0 0-.11 5.87.82 5.49l4.08-2.69 9.32-14.33 5-20.07v-17.73l-4.32-4.08-.58 2-.82 1.05-.28 2.55-1 .23-.7 5.37h-1l-.42 1.69s4.87 6.32 5.09 9.39c0 0-.6 13.94-8.57 21.91l-3.56 2.35a19.29 19.29 0 01-11.79.12l-1.74-4.55-.59-2 .35-2.8-1.4-4.79-1.67-18.41s-.26-4.12-.26-4.47.25-1.63.25-1.63l.3-2.27s7.02-1.33 11.89-.28z"
          fill="#4c4c4c"
        />
        <path
          className="prefix__f1f90117-83a2-45a4-bf56-a258ded210d0"
          d="M373.72 584s-13-.38-20.87 5h-1.15s-8.42 4-11.68 21.44 12.64 33.13 19.34 34.28 4.41-1 11.3 2.29 11.51-.95 11.51-.95.33-2.28-2.59-2.28l-1.05-.7-1-1.63h-1.33l-.59-1.75s-2.91-2.69-4-8.52l-1.41-9.32-.11-1.64c-1.12 0-1.93-14.67-1.48-17.94 0 0-.85-5.39-.15-7.61l.7-2.8.58-2.68 1.29-2 1.28-1.87.7.12zM399.41 586.4a49.49 49.49 0 0116 8.86h.82s13.88 9 2.8 33.48c0 0-8.75 16.33-23.92 18A23.5 23.5 0 01392 646s-4.67-.7-7.35.7l1.86-2.1.47-2.57 3.38-2.1.24-3.62.7-.81.46-.94 2-1.86v-1.63l1.05-2.8L396 628c.77.1 6.31-14.51 5-19.08l-.23-2.26-.23-4.67-.12-1.71.35-3.42-.7-1.17.58-3.38-1.4-2.57-.58-2zM356.7 506.76c-.39-11.69-.64-23.39-.91-35.08l-.4-17.54-.3-17.54-.5-35.08-.35-35.08 5.59.43a2.8 2.8 0 01-5.58-.49v-.08a68.33 68.33 0 00-1.05-13.15 56.06 56.06 0 00-3.58-12.57 57.41 57.41 0 00-15.71-20.72A67.92 67.92 0 00311 307.17a62.6 62.6 0 00-26-2.62 71.84 71.84 0 00-13 2.69 57.65 57.65 0 00-12.1 5.17 28.9 28.9 0 00-9.47 8.29 15.08 15.08 0 00-1.42 2.61 17.64 17.64 0 00-.89 2.9 12.61 12.61 0 00.06 5.8 8.92 8.92 0 003 4.64 13.17 13.17 0 005.37 2.49 25.8 25.8 0 006.37.54 20.33 20.33 0 006.2-1.23 33.19 33.19 0 0011.05-7A49.49 49.49 0 00294 308.81a45.16 45.16 0 001.19-13.35 43.16 43.16 0 00-9.08-24.94 47.9 47.9 0 00-9.86-9.16 50 50 0 00-12.07-6 80.29 80.29 0 00-13.18-3.11 129.22 129.22 0 00-13.62-1.35 106.84 106.84 0 00-13.63.14c-4.53.34-9.1 1-13.78 1.3a91.77 91.77 0 01-14.07-.15c-1.17-.08-2.33-.23-3.49-.34s-2.33-.25-3.48-.42l-3.47-.47c-1.18-.18-2.36-.4-3.52-.65a62 62 0 01-25.8-12.06 47 47 0 01-9.76-10.81 43.7 43.7 0 01-5.89-13.44 45.38 45.38 0 01-1.16-14.65 31 31 0 01.54-3.82 31.9 31.9 0 011.12-3.7 48.19 48.19 0 013.17-6.68 60.71 60.71 0 018.67-11.68 45.19 45.19 0 0111.72-9.09 27.34 27.34 0 017.35-2.62 21.06 21.06 0 018.15-.09 20.06 20.06 0 0113.18 9.33 19.17 19.17 0 012.69 7.93 15.34 15.34 0 01-.19 4.42 15.06 15.06 0 01-1.49 4.2 23.42 23.42 0 01-5 6.34 36.66 36.66 0 01-6.12 4.53 52.52 52.52 0 01-28.47 7.2c-.63 0-1.25-.06-1.88-.13s-1.24-.11-1.87-.2a19.2 19.2 0 01-1.9-.29l-1-.2-1-.27a31.87 31.87 0 01-7.17-3.06 40.48 40.48 0 01-6.2-4.34 46.06 46.06 0 01-5.34-5.2 58.18 58.18 0 01-13.1-26.08 73.21 73.21 0 01-.39-28.89c.39-2.37 1-4.7 1.52-7l1-3.45.44-1.56c.13-.51.27-1 .37-1.53a33.32 33.32 0 00.51-12.41A22.77 22.77 0 00113.8 100a26.15 26.15 0 00-9.84-7.2 49.3 49.3 0 00-12.47-3.39 46.67 46.67 0 00-13 .08c-4.4.57-8.86 1.59-13.54 2.34a47.27 47.27 0 01-14.52.44A51.78 51.78 0 0124.6 80.1 75.78 75.78 0 017.11 58 62.55 62.55 0 010 30.88 70 70 0 014.6 3.51a.34.34 0 01.45-.21.36.36 0 01.2.44 69.21 69.21 0 00-2.84 13.4 68.93 68.93 0 00-.28 13.62A61.05 61.05 0 0010 56.4a72.61 72.61 0 0017.26 20.47 52.64 52.64 0 0011.28 6.91 43.5 43.5 0 0012.54 3.49 44.65 44.65 0 0013-.77c4.4-.8 8.91-2 13.64-2.67a52.93 52.93 0 0114.57-.4A54.17 54.17 0 01106.46 87a39 39 0 016.64 3.63 28.74 28.74 0 015.73 5.19 29.38 29.38 0 016.44 14 40.05 40.05 0 01-.34 15c-.12.61-.28 1.22-.43 1.83l-.49 1.77-.87 3.21c-.5 2.15-1 4.3-1.34 6.48a66 66 0 00.57 26 52.5 52.5 0 0011.49 22.78 39.55 39.55 0 004.53 4.44 34 34 0 005.1 3.59 25 25 0 005.49 2.36l.7.2.68.13.7.14.78.1c.52.08 1 .13 1.57.17s1 .09 1.57.11a45.19 45.19 0 0024.47-5.91 29.21 29.21 0 005-3.61 16.68 16.68 0 003.6-4.37 7.89 7.89 0 00.85-2.27 8.69 8.69 0 00.13-2.46 12.22 12.22 0 00-1.68-5.07 13.26 13.26 0 00-8.63-6.3c-3.56-.74-7.57.13-11.22 2a38.87 38.87 0 00-10.08 7.68 56 56 0 00-7.91 10.36 42.07 42.07 0 00-2.85 5.75 24.78 24.78 0 00-.93 2.89 25.22 25.22 0 00-.47 3 41.14 41.14 0 00.78 12.8 38.13 38.13 0 004.83 11.89 43.25 43.25 0 008.44 9.84 57.29 57.29 0 0023.52 11.8c1.08.27 2.16.51 3.25.71l3.36.56c1.13.2 2.25.36 3.38.5s2.25.32 3.37.43a87.55 87.55 0 0013.54.48c4.51-.18 9.1-.7 13.77-.93a108.83 108.83 0 0114 .2c9.24.74 18.55 1.94 27.43 5.06a54.18 54.18 0 0112.57 6.35 50 50 0 0110.27 9.64 45.06 45.06 0 016.87 12.32 48.8 48.8 0 012.79 13.81 55.44 55.44 0 01-.05 7.06 41.82 41.82 0 01-1 7 50.84 50.84 0 01-5.44 13.05 54.93 54.93 0 01-8.68 11.2 36.48 36.48 0 01-11.92 8.05 24 24 0 01-7.26 1.68 29.15 29.15 0 01-7.37-.42 17 17 0 01-7.14-3.08 13.2 13.2 0 01-4.58-6.68 17.05 17.05 0 01-.36-7.89 22.48 22.48 0 011-3.72 19.61 19.61 0 011.76-3.52 26.8 26.8 0 014.92-5.75 43 43 0 015.88-4.41 62.86 62.86 0 0113.08-6.08 71.39 71.39 0 0114-3.2 65.64 65.64 0 0114.43-.3 59.39 59.39 0 017.16 1.05 64.81 64.81 0 017 1.82 71.14 71.14 0 0125.09 13.93 63.55 63.55 0 0117.19 23.09 59 59 0 013.84 14 73.06 73.06 0 01.88 14.38l-5.58-.57v.03a2.81 2.81 0 015.58.48l-.35 35.08-.51 35.04-.3 17.54-.4 17.54c-.27 11.69-.52 23.39-.91 35.08a.35.35 0 01-.7 0z"
        />
        <path
          d="M93.32 12.14a75.48 75.48 0 009.94 20.19 60.28 60.28 0 0015.95 15.54 66.38 66.38 0 009.79 5.32 75.59 75.59 0 0010.56 3.62 97 97 0 0022.13 3 137.64 137.64 0 0044.14-6.62 96.29 96.29 0 0010.38-4c3.43-1.53 6.86-3.15 10.3-4.75 6.89-3.2 13.83-6.37 20.9-9.28a219.06 219.06 0 0121.71-7.69 105.37 105.37 0 0123-4.22c1-.05 2-.11 3-.1s2 0 3 .05c2 .05 3.91.31 5.87.47a109.79 109.79 0 0111.52 1.91 104.63 104.63 0 0111.27 3.16c3.7 1.27 7.31 2.76 10.85 4.38s7 3.5 10.31 5.49 6.58 4.13 9.72 6.39a208.67 208.67 0 0117.89 14.59c5.69 5.13 11.14 10.45 16.63 15.62 2.75 2.59 5.51 5.15 8.32 7.62.69.63 1.4 1.23 2.11 1.84l1.06.91 1 .85c1.41 1.13 2.9 2.23 4.41 3.3a152.23 152.23 0 0019.07 11.5 109.91 109.91 0 0020.58 8.08c7.06 1.91 14.38 2.94 21.46 2.08a34.82 34.82 0 0010.17-2.79 14.17 14.17 0 007.23-6.2 11.73 11.73 0 00.42-9.21 17.26 17.26 0 00-1-2.32 15.22 15.22 0 00-1.26-2.12 14 14 0 00-3.58-3.33 33.27 33.27 0 00-9.77-4.16 75.64 75.64 0 00-10.88-2 140.83 140.83 0 00-22.42-.61A181.09 181.09 0 00416.71 81c-3.7.65-7.38 1.42-11 2.37s-7.25 2.07-10.81 3.27a135.93 135.93 0 00-20.68 9c-6.69 3.51-13.26 7.3-19.85 11l-19.82 11.21c-6.62 3.7-13.26 7.41-20 10.93-3.39 1.72-6.74 3.52-10.2 5.11l-5.15 2.46-5.2 2.3c-3.46 1.59-7 2.92-10.56 4.37L278 145c-1.78.67-3.63 1.2-5.44 1.8a114.76 114.76 0 01-22.43 4.89 103.31 103.31 0 01-11.5.56c-1.86 0-3.84.05-5.81-.12a39.39 39.39 0 01-5.82-.92 38.06 38.06 0 01-11-4.38 28.87 28.87 0 01-8.89-8 18.64 18.64 0 01-3.61-11.73 19.86 19.86 0 014.65-11.38 39.1 39.1 0 019-7.8 82.66 82.66 0 0110.21-5.63 146.85 146.85 0 0121.67-7.93c3.71-1 7.44-2 11.23-2.73 1.9-.38 3.81-.72 5.75-1s3.81-.49 5.72-.7a269.66 269.66 0 0145.91-1 187 187 0 0122.91 2.9A123.49 123.49 0 01363 98.29a70.07 70.07 0 0120.37 12.13 45.39 45.39 0 0113.51 20.08 40.27 40.27 0 011.85 12.21 48.32 48.32 0 01-1.63 12.08 74.52 74.52 0 01-10 21.55 124.18 124.18 0 01-14.72 18.16q-4.05 4.2-8.4 8.06l-2.19 1.91-2.31 1.89a79.412 79.412 0 01-4.83 3.52A84.75 84.75 0 01333.29 220a102.3 102.3 0 01-23.14 4.42 105.36 105.36 0 01-23.53-.81c-2-.31-3.91-.66-5.86-1.11-1-.21-1.94-.47-2.91-.72a29.67 29.67 0 01-3.07-1 25.22 25.22 0 01-10.76-7.7 17.5 17.5 0 01-3.23-6.4 15 15 0 01-.05-7.48 17 17 0 013.26-6.4 24.7 24.7 0 014.85-4.6 43 43 0 0111.09-5.59 51.34 51.34 0 0111.92-2.69 56.58 56.58 0 0124 2.89 78.08 78.08 0 0121 11.17 114.79 114.79 0 0124.52 25.2 66.77 66.77 0 015.84 10.44 93.18 93.18 0 016.49 22.61 224.18 224.18 0 012.48 22.94c.47 7.63.74 15.24.94 22.85s.31 15.22.32 22.82c.07 15.2-.34 30.4-.45 45.53v.05a2.1 2.1 0 01-.14.76v.06l.15-.8-.38 35.08-.42 35.08-.52 35.08-.69 35.08a.34.34 0 01-.35.34.35.35 0 01-.35-.34l-.59-35.08-.52-35.08-.42-35.08-.38-35.08a2 2 0 01.13-.74v-.12l-.14.81c-.19-15.21-.2-30.36-.47-45.5q-.19-11.36-.67-22.68c-.31-7.56-.7-15.1-1.28-22.61s-1.36-15-2.67-22.26a87 87 0 00-6.25-21 59.5 59.5 0 00-5.36-9.33 110.51 110.51 0 00-23.1-23.34 70.59 70.59 0 00-19.09-10.05 49.29 49.29 0 00-20.88-2.43 44 44 0 00-10.22 2.37 36 36 0 00-9.14 4.64c-2.63 1.93-4.66 4.33-5.26 6.83a8.57 8.57 0 001.9 7.44 17.89 17.89 0 007.57 5.34 23.72 23.72 0 002.34.76c.86.22 1.72.46 2.6.65 1.75.41 3.54.72 5.33 1a97.87 97.87 0 0021.85.76c14.56-1.1 29-5.18 41.13-13.13 1.51-1 3-2.05 4.39-3.15l2.1-1.7 2.11-1.81q4.19-3.68 8.08-7.63a118.46 118.46 0 0014-17.05 67.48 67.48 0 009.24-19.49 36.67 36.67 0 000-20.61 38.88 38.88 0 00-11.51-17.27A64.54 64.54 0 00360.7 104a117.75 117.75 0 00-21.23-6.3 193.15 193.15 0 00-22.17-3.08 272.78 272.78 0 00-45 .2q-2.81.26-5.59.58c-1.82.21-3.65.5-5.48.83-3.66.66-7.3 1.5-10.92 2.44a141.13 141.13 0 00-21.17 7.3 78.06 78.06 0 00-9.8 5.16 35.1 35.1 0 00-8.26 6.89 16.22 16.22 0 00-4 9.26 15.24 15.24 0 002.84 9.64 25.82 25.82 0 007.8 7.22 35.36 35.36 0 0010 4.19 36.52 36.52 0 005.4.94c1.81.2 3.63.18 5.56.21a93.31 93.31 0 0011.23-.39 112.43 112.43 0 0022-4.59c1.79-.58 3.61-1.08 5.38-1.73l5.33-1.88c3.51-1.4 7-2.72 10.49-4.28a419.85 419.85 0 0040.4-20.61c13.22-7.44 26.24-15.17 39.59-22.5 3.37-1.78 6.76-3.56 10.26-5.11s7.05-3 10.67-4.25c1.8-.66 3.63-1.21 5.44-1.81s3.64-1.12 5.49-1.65c3.7-1.05 7.44-1.91 11.19-2.65a185.34 185.34 0 0122.77-2.94 144 144 0 0123 .17 78.87 78.87 0 0111.52 1.91 37.26 37.26 0 0111.15 4.53 18.49 18.49 0 014.8 4.3 19.72 19.72 0 011.71 2.72 22.92 22.92 0 011.28 2.91 18 18 0 011.09 6.4 15.26 15.26 0 01-1.55 6.51 19.14 19.14 0 01-9.43 8.64 40.1 40.1 0 01-11.63 3.43c-8 1.12-16 .12-23.61-1.78a114.79 114.79 0 01-21.8-8.27 153.2 153.2 0 01-20-11.8c-1.59-1.12-3.15-2.27-4.71-3.51l-1.16-1-1.1-.94c-.73-.63-1.47-1.25-2.18-1.89-2.9-2.53-5.7-5.13-8.48-7.74-5.55-5.22-11-10.46-16.56-15.52-11.06-10.09-22.91-19.3-36.26-25.62a109.05 109.05 0 00-10.22-4.19 100.46 100.46 0 00-10.62-3c-1.79-.44-3.61-.74-5.42-1.1s-3.64-.57-5.47-.81-3.71-.44-5.47-.5c-.89-.07-1.8-.07-2.7-.07s-1.81 0-2.71.05a100.39 100.39 0 00-21.75 3.78 219.29 219.29 0 00-21.26 7.27c-7 2.75-13.92 5.77-20.84 8.85-3.46 1.54-6.92 3.1-10.44 4.61a100.74 100.74 0 01-10.9 4 139.76 139.76 0 01-22.57 4.82 132.33 132.33 0 01-23 1.05 95.7 95.7 0 01-22.79-3.67 77.29 77.29 0 01-10.84-4.1 68.82 68.82 0 01-10-5.81 62.27 62.27 0 01-16-16.51 75.4 75.4 0 01-9.32-20.86.34.34 0 01.24-.43.35.35 0 01.4.22z"
          fill="#fbe101"
        />
        <path
          d="M525.66.57a156.21 156.21 0 01-17.78 18.69 133.42 133.42 0 01-21 15.13 116.67 116.67 0 01-23.76 10.47A101.93 101.93 0 01450.44 48q-3.22.59-6.48.94c-1.08.11-2.17.22-3.24.3-.55 0-1.05.09-1.52.15l-1.67.18a126.56 126.56 0 01-13.06.45 85.53 85.53 0 01-13.11-1.13 41.92 41.92 0 01-6.56-1.63 22.17 22.17 0 01-6.35-3.26 13 13 0 01-2.7-2.82 10.68 10.68 0 01-1.61-3.73 14.36 14.36 0 01.58-7.55 21.25 21.25 0 013.37-6.34 29.86 29.86 0 014.86-5 54.16 54.16 0 0111.48-7 109.79 109.79 0 0125.12-7.76 192.59 192.59 0 0152-2.44 195.69 195.69 0 0125.79 4c2.13.49 4.25 1 6.36 1.56S527.86 8 530 8.58c4.19 1.19 8.36 2.59 12.44 4.16s8.09 3.32 12 5.2 7.8 3.87 11.59 6c1.9 1.06 3.79 2.13 5.65 3.25s3.71 2.23 5.55 3.38c3.68 2.28 7.24 4.55 10.9 6.77Q599 44 610.23 50.18c7.46 4.1 15 8 22.75 11.49a190.06 190.06 0 0023.62 9 94.8 94.8 0 0012.17 2.82 51.82 51.82 0 0012.21.59 25.91 25.91 0 0011.19-3.33c3.37-1.93 6-4.75 6.56-8.19a11.94 11.94 0 00-.44-5.36 15.84 15.84 0 00-2.52-5.07 37.82 37.82 0 00-8.84-8.28 92.66 92.66 0 00-22.54-11.08 131.88 131.88 0 00-24.67-5.89 123.84 123.84 0 00-25.38-1 105.07 105.07 0 00-24.94 4.58 97.42 97.42 0 00-11.81 4.7c-3.85 1.81-7.61 3.79-11.26 6a94.37 94.37 0 00-20 15.56c-5.81 6.1-10.56 13.32-12.9 21.38a40.46 40.46 0 00-1.64 12.36 39.72 39.72 0 00.61 6.24 47.94 47.94 0 001.44 6.11A59 59 0 00546 124.69a46.77 46.77 0 009.37 8.24 32.08 32.08 0 0011.27 4.76l1.51.26 1.55.17c1 .14 2.07.16 3.11.24a40.7 40.7 0 006.16-.24 21.56 21.56 0 0011-4.38c6.06-4.89 7.83-14.57 3.19-20.89a19.23 19.23 0 00-9-7.19 34.74 34.74 0 00-11.87-2.35 75 75 0 00-24.57 3.78c-2 .62-4 1.31-5.94 2a58.27 58.27 0 00-5.65 2.49 60.05 60.05 0 00-10.35 6.7 52.91 52.91 0 00-15.14 19 38 38 0 00-3.2 11.49 33.79 33.79 0 00.76 11.77c1.84 7.72 6.33 14.76 12.11 20.42a54.23 54.23 0 0020.49 12.65 31.45 31.45 0 0011.45 1.73 12.07 12.07 0 009.06-4.31 10.85 10.85 0 002.89-9.12c-.5-3-2.93-5.82-6-8a42.76 42.76 0 00-10.66-5.21 79.15 79.15 0 00-11.94-3.06 122.47 122.47 0 00-24.89-1.79 134.6 134.6 0 00-24.85 2.94 108.56 108.56 0 00-23.55 7.83A75.19 75.19 0 00442 188.23a55.79 55.79 0 00-13.42 19.82 62.27 62.27 0 00-4.12 23.76 95.89 95.89 0 003.54 24.43c.86 3.38 3 6.66 5.55 9.68a51.18 51.18 0 008.81 8.12 48.11 48.11 0 0010.38 5.87 24.25 24.25 0 0010.9 2 11.42 11.42 0 004.68-1.42 9.47 9.47 0 003.44-3.06 5.12 5.12 0 00.66-3.73 10 10 0 00-.73-2.23c-.17-.36-.4-.82-.57-1.1a5.91 5.91 0 00-.62-.88 16 16 0 00-4.07-3.3 34 34 0 00-5.26-2.51 52.52 52.52 0 00-11.7-2.86c-8-1-16.37-.41-23.69 2.53a33.82 33.82 0 00-9.91 6.23 42.24 42.24 0 00-7.6 9.23c-4.26 6.9-7 14.86-8.82 23a153.61 153.61 0 00-3.25 25c-.46 8.49-.65 17.07-.89 25.63l-.33 12.9c-.11 4.27-.11 8.56-.17 12.84l-.26 25.7c-.15 17.14-.4 34.27-.65 51.41l-.8 51.43a.36.36 0 01-.36.35.35.35 0 01-.34-.35l-.8-51.45c-.25-17.16-.5-34.31-.65-51.47l-.26-25.74c0-4.29-.12-8.57-.11-12.88l.07-12.81c.06-8.59.08-17.15.37-25.8a155.37 155.37 0 013-26 80.62 80.62 0 019.18-24.93 48 48 0 018.55-10.64 39.93 39.93 0 0111.66-7.52 48.25 48.25 0 0113.33-3.31 60.87 60.87 0 0113.56.09 58.57 58.57 0 0113.26 3.1 40.11 40.11 0 016.36 3 22.27 22.27 0 015.88 4.75 12.44 12.44 0 011.25 1.72 17.64 17.64 0 01.93 1.75 16.68 16.68 0 011.29 3.86 13 13 0 01.08 4.41 12 12 0 01-1.57 4.23 16.26 16.26 0 01-5.94 5.54 18.49 18.49 0 01-7.5 2.36 31.18 31.18 0 01-14.2-2.42 55.54 55.54 0 01-12-6.68 59.12 59.12 0 01-10.1-9.22 42.46 42.46 0 01-4.15-5.68 31 31 0 01-1.7-3.24c-.25-.57-.49-1.15-.7-1.76-.1-.3-.21-.6-.3-.92l-.14-.46-.11-.4a103.48 103.48 0 01-4-26.3 69.7 69.7 0 014.67-26.59 63.3 63.3 0 0115.2-22.44 81.89 81.89 0 0122.26-15 116.19 116.19 0 0125.2-8.2 142.5 142.5 0 0126.19-2.91 130 130 0 0126.31 2.09 87.39 87.39 0 0112.93 3.41 49.35 49.35 0 0112.3 6.21 25.54 25.54 0 015.35 5.07 16 16 0 012.65 15.18 18.75 18.75 0 01-3.93 6.66A19.9 19.9 0 01560 200a16.12 16.12 0 01-3.75 1.27 23.68 23.68 0 01-3.68.49 37.36 37.36 0 01-13.83-2.13 59.84 59.84 0 01-22.79-14.33 49 49 0 01-13.51-23.41 39.62 39.62 0 01-.7-13.77 43.79 43.79 0 013.84-13.12 57.57 57.57 0 0117-20.64 64.64 64.64 0 0111.34-7 57.75 57.75 0 016.16-2.58c2.06-.74 4.14-1.43 6.25-2a78.88 78.88 0 0126.11-3.5 38.73 38.73 0 0113.18 2.88 23.13 23.13 0 0110.61 8.79 21.82 21.82 0 011.63 3.1 16.8 16.8 0 011.1 3.41 19 19 0 010 7 20.17 20.17 0 01-2.39 6.58 19.89 19.89 0 01-4.58 5.3 24.67 24.67 0 01-12.67 4.89 43.78 43.78 0 01-6.67.16c-1.1-.1-2.21-.14-3.3-.31l-1.64-.21-1.66-.3a35 35 0 01-12.19-5.36 51.33 51.33 0 01-9.8-8.8 61.56 61.56 0 01-12.45-22.87 49.92 49.92 0 01-1.44-6.41 43.47 43.47 0 01-.61-6.55 42.23 42.23 0 011.77-13c2.48-8.46 7.46-16 13.47-22.22a98.17 98.17 0 0120.41-16q5.56-3.34 11.44-6.12a101.78 101.78 0 0112.05-4.86c16.52-5.46 34.24-6.4 51.41-4.37a135.62 135.62 0 0125.4 5.54 95.88 95.88 0 0123.7 11.1 41.76 41.76 0 0110 9 20.94 20.94 0 011.91 3 19.47 19.47 0 011.36 3.35 16.19 16.19 0 01.69 7.33 14.15 14.15 0 01-3.08 6.89 21 21 0 01-5.48 4.67 27.63 27.63 0 01-6.39 2.88 34.7 34.7 0 01-6.77 1.35 56.76 56.76 0 01-13.45-.41A101.14 101.14 0 01655.1 76a178 178 0 01-24.52-9 397.29 397.29 0 01-45.7-24.37c-3.68-2.22-7.35-4.55-11-6.78-1.8-1.12-3.61-2.23-5.44-3.29s-3.66-2.13-5.51-3.16-3.71-2-5.57-3-3.75-1.94-5.66-2.84c-3.7-1.83-7.6-3.56-11.51-5.05s-7.88-2.88-11.92-4.06c-2-.58-4.11-1.17-6.13-1.71s-4.07-1.05-6.13-1.53a189.31 189.31 0 00-25-4 187.07 187.07 0 00-50.47 1.84 107.8 107.8 0 00-24 7.07A48.84 48.84 0 00406 22.35a20.15 20.15 0 00-6.89 9 9.87 9.87 0 00-.53 5.11 6.68 6.68 0 002.59 4 18 18 0 005 2.63 41.4 41.4 0 005.89 1.57A82.74 82.74 0 00424.59 46a123.93 123.93 0 0012.64-.17l1.53-.13c.59-.06 1.16-.1 1.69-.13a94.921 94.921 0 009.43-1 107.21 107.21 0 0012.36-2.69 114.26 114.26 0 0023.49-9.57c15-8.08 28.13-19.33 39.39-32.2a.34.34 0 01.49 0 .36.36 0 01.05.46z"
          fill="#8e1b55"
        />
        <path
          className="prefix__f1f90117-83a2-45a4-bf56-a258ded210d0"
          d="M770.25 16.7c-.82 9.37-1.41 18.78-2.89 28.16a95 95 0 01-3.2 14A54.17 54.17 0 01758 72a43.84 43.84 0 01-10 10.82 52.82 52.82 0 01-12.81 7.23c-9.1 3.64-18.72 5.28-28.25 6.17s-19.15.67-28.5.55-18.63 0-27 2.49-15.31 8.13-18.53 15.87a35.67 35.67 0 00-2.69 12.45 47.75 47.75 0 001.22 13 41 41 0 004.85 12 48.7 48.7 0 008.18 10.27 43.43 43.43 0 0010.62 7.54 23.25 23.25 0 0012 2.69 15.74 15.74 0 005.73-1.42 8.29 8.29 0 003.88-3.38 6.23 6.23 0 00.37-4.8 15.69 15.69 0 00-2.94-5.22c-2.54-3.13-6.49-5.47-10.58-7.19a50.64 50.64 0 00-13-3.43 45.57 45.57 0 00-13.5.24 31 31 0 00-12.39 4.87 38.18 38.18 0 00-9.81 9.31 31.18 31.18 0 00-3.26 5.91 37.27 37.27 0 00-2 6.52 67.87 67.87 0 00-1.33 13.76 133.73 133.73 0 00.73 14 81.1 81.1 0 01-1.83 28.47 50.77 50.77 0 01-5.55 13.35 43 43 0 01-9.54 11 47 47 0 01-12.63 7.28A64.81 64.81 0 01565.4 266a95.14 95.14 0 01-14.39.88c-4.76-.05-9.53-.26-14.3-.75-9.52-1-19.12-2.85-28.14-6.91a49.76 49.76 0 01-12.61-8 39.79 39.79 0 01-9.39-12 25.86 25.86 0 01-2.51-7.65 19.74 19.74 0 01.5-8.42 20 20 0 014.05-7.43 23.62 23.62 0 016.36-5.2 25.75 25.75 0 017.64-2.88 20.78 20.78 0 014.2-.43 31.07 31.07 0 014 .3 45.33 45.33 0 0114.48 5 58.86 58.86 0 0122 20.22 50.15 50.15 0 016.17 14 48.17 48.17 0 011.56 15.26 60.32 60.32 0 01-9.62 28.43 74.52 74.52 0 01-20.7 21.39 55.52 55.52 0 01-6.56 3.85c-1.13.57-2.21 1.06-3.31 1.59s-2.24 1-3.36 1.48a85.87 85.87 0 01-14.05 4.61c-9.67 2.29-19.47 2.75-29 2.75h-7.09q-3.37 0-6.73.22a71.25 71.25 0 00-13.16 2.12 45.2 45.2 0 00-12 4.93 34.46 34.46 0 00-5.12 3.74 29.81 29.81 0 00-4.19 4.65A27.61 27.61 0 00417 347a32.73 32.73 0 00-2 6.05 43.37 43.37 0 00-1 6.5c-.21 2.25-.37 4.59-.42 6.8l-.49-1.77v.1l.05.08a3.24 3.24 0 01.45 1.66l-.51 35.08-.64 35.08-.37 17.54-.45 17.54c-.3 11.69-.58 23.39-1 35.08a.4.4 0 01-.8 0c-.4-11.69-.68-23.39-1-35.08l-.45-17.54-.37-17.54-.64-35.08-.36-35.06.5 1.75-.06-.1a3.16 3.16 0 01-.5-1.68v-.08c0-2.5.1-4.87.25-7.31a49.94 49.94 0 01.95-7.46 38.11 38.11 0 012.27-7.38 34.86 34.86 0 013.76-6.85 38.11 38.11 0 015.14-5.91 41.71 41.71 0 016.17-4.7 53.37 53.37 0 0113.9-6A75.21 75.21 0 01454 318.1c2.46-.2 4.91-.3 7.37-.3h7.03c9.26-.09 18.4-.65 27.05-2.8a85.58 85.58 0 0012.72-4.26c1-.46 2.08-.89 3.11-1.36s2.08-1 3.06-1.46a51.25 51.25 0 005.61-3.28 66.32 66.32 0 0018.31-18.89 52.08 52.08 0 008.64-24.36 41 41 0 00-6.2-24.56A51.36 51.36 0 00521.81 219a38.18 38.18 0 00-12-4.33 24.49 24.49 0 00-3-.26 13.59 13.59 0 00-2.81.25 18.54 18.54 0 00-5.55 2 14.91 14.91 0 00-7.33 8.4c-1.1 3.51-.43 7.53 1.34 11.31a33.44 33.44 0 007.64 10.28A45.38 45.38 0 00511 254c8.06 4 17.12 6.11 26.25 7.34 4.58.61 9.21 1 13.86 1.17a91.79 91.79 0 0013.78-.44 61.61 61.61 0 0013.33-3 43.59 43.59 0 0011.92-6.42 38.68 38.68 0 009.07-10 48.32 48.32 0 005.45-12.54c2.46-8.89 2.76-18.31 1.93-27.57s-1.43-19 .49-28.5a37.68 37.68 0 015.47-13.48 41.4 41.4 0 0110.32-10.26 35.78 35.78 0 0113.51-5.81 49.13 49.13 0 0114.61-.79 54.48 54.48 0 0114.3 3.23 41.62 41.62 0 016.74 3.23 25.53 25.53 0 016 4.93 20.72 20.72 0 014.15 6.89 13 13 0 01.66 4.4 11.16 11.16 0 01-1.12 4.52 13.83 13.83 0 01-6.26 6.09 21.92 21.92 0 01-7.82 2.24 24.18 24.18 0 01-4 .09 24.67 24.67 0 01-4-.51 34 34 0 01-7.38-2.44 48.54 48.54 0 01-12.49-8.47 55.57 55.57 0 01-9.58-11.57 47.41 47.41 0 01-5.75-14 54.72 54.72 0 01-1.45-15 41.8 41.8 0 013.37-15 34 34 0 014-6.78 34.34 34.34 0 015.45-5.65 37.94 37.94 0 0113.63-7.16 62.1 62.1 0 0114.69-2.3c4.86-.25 9.65-.16 14.38 0s9.41.34 14 .38 9.27-.05 13.88-.32c9.2-.59 18.39-1.91 26.9-5a49.45 49.45 0 0011.94-6.15 39.63 39.63 0 009.44-9.46 52.13 52.13 0 006.28-12.06 95.5 95.5 0 003.76-13.37c1-4.56 1.76-9.19 2.48-13.83l2.14-14a.39.39 0 01.46-.33.4.4 0 01.46.4z"
        />
        <path
          className="prefix__e37b8c93-2f5e-4a6b-aae8-04c5d7280557"
          d="M411.87 518.53a1.13 1.13 0 00-2.24-.26c-1.37 4.15-4.47 6.84-8 6.84s-6.52-2.89-7.9-7a.95.95 0 00-1.86 0c-1.38 4.15-4.4 7-7.91 7s-6.53-2.89-7.9-7a1 1 0 00-1-.76 1 1 0 00-1 .76c-1.38 4.15-4.4 7-7.91 7s-6.54-2.78-7.91-6.93a1.14 1.14 0 00-1.08-.8 1.16 1.16 0 00-1.15 1.15 1.14 1.14 0 00.1.45l27.88 53.59L411.78 519a1.13 1.13 0 00.09-.47z"
        />
        <path
          fill="#4e4c4c"
          d="M374.63 554.74l18.51.09-9.23 17.75-9.28-17.84z"
        />
      </svg>
    ),
  },
];
const list = [
  {
    text: 'Deliver designs that fit your business’ identity with well-constructed objectives, strategies and ideas',
  },
  {
    text: 'Engage with your audience via innovative, unique and timeless designs',
  },
  {
    text: 'Focus on generating the results you expect and contribute to clear ROI',
  },
  {
    text: 'Produce designs that align with your core messaging and rise above the noise of all your competitors',
  },
  {
    text: 'Tell a story with well-crafted design concepts that flow seamlessly across all your business’ marketing materials',
  },
  {
    text: 'Create strong impressions, build a brand identity, convey key information, narrate your story and build consumer trust with good creative design',
  },
];

const Design = ({ data }) => {
  const review = data.Review;

  return (
    <Layout>
      <SEO
        title="Design, Branding &amp; Digital Design | Nutcracker"
        description="Nutcracker’s design and branding expertise defines brand identities, evolves ambitious brands and startups, and creates scroll-stopping digital content."
      />
      <ServiceHeader page="Design &amp; branding">
        <h1>
          <span>Design</span> and <span className="second">branding</span>{' '}
          services for <span className="third">businesses</span> that want
          better
        </h1>
      </ServiceHeader>
      <ServiceBody icon={icon[0].src}>
        <p>
          <span>
            We create and evolve your brand story through bold design, strong
            identity and creative digital content.
          </span>{' '}
        </p>
        <p>
          Impactful design isn’t just creating something that looks good on a
          page. It has to make a connection, have it’s own identity, evoke your
          brand’s purpose, mission and vision and be unforgettable.
        </p>
        <p>
          It needs to connect you with your audience, build brand loyalty and
          align with your company objectives with your brand storytelling
          strategy.
        </p>
      </ServiceBody>
      <NewServiceBodyLeft
        alt
        title="Brand Design"
        strong="We work with businesses to create new, re-defined, re-designed and re-developed brand identities that will bring your brand to life, communicate its story and reawaken its purpose. A large part of our design expertise lies in taking the skeletal foundations of a brand and/or existing logos and working with our clients to develop a fully rounded brand identity that works across all aspects of marketing."
        fp="We offer various branding and design packages depending on your requirements, needs and objectives. Our brand design services include everything from the strategic brand propositioning piece, logo creation or re-design, typography, colour choice, visual design strategy, imagery styling and brand guidelines to assets such as labelling, packaging and point of sale."
        sp="Branding can make or break your business. At Nutcracker, we provide everything you need to connect or reconnect with your audience, make your brand valued and leave a long-lasting impact."
      >
        <StaticImage
          src="../assets/images/brand-design-nutcracker-agency.png"
          alt="Brand Design"
        />
      </NewServiceBodyLeft>
      <NewServiceBodyLeft
        title="Design"
        fp="Our design ethos at Nutcracker is to create work that makes an impact on our client’s businesses. The Nutcracker design process always centres around a creative end goal, with strategy at its core, we work backwards from there to ensure all design content, in its many forms, forges meaningful connections with your target audience."
        sp="Whether our graphic designers get to work on a strategic marketing campaign to target a specific sector, e-books/guides or whitepapers, account based marketing campaigns, print advertisements or social content, the design we create always embodies a clear purpose. "
      >
        <StaticImage
          src="../assets/images/design-nutcracker-agency.png"
          alt="Design"
        />
      </NewServiceBodyLeft>
      <NewServiceBodyLeft
        alt
        title="Digital design"
        fp="In today’s world, digital design is equally as important as traditional design and if your digital presence is lacklustre in comparison to your overall brand identity, you’re making a big mistake. "
        sp="From social media content and animations or banners for a display marketing campaign, paid social graphics, digital e-guides, email marketing material to assets and icons for your company website, the Nutcracker design team have what it takes to tell your brand’s story in the digital space."
      >
        <StaticImage
          src="../assets/images/digital-design-nutcracker-agency.png"
          alt="Brand Design"
        />
      </NewServiceBodyLeft>
      <DesignSlider />
      <ServiceBlogs
        data={data.Category.nodes}
        title="Insight from the Nutcracker team"
      />
      <ServiceContact>
        <h5>
          Ready to explore the benefits of <span>design</span> that makes a
          difference and build upon your most important business asset, your
          brand?
        </h5>
        <p>
          Let us know where you'd like to start and we can take it from there.
          Don’t be shy.
        </p>
      </ServiceContact>
      <Review reviewData={review} />
    </Layout>
  );
};

Design.propTypes = {
  data: PropTypes.shape({
    Review: PropTypes.any,
  }),
};

export default Design;

export const Query = graphql`
  query DesignQuery {
    Review: sanityReview(location: { eq: "designpage" }) {
      title
      quote
      name
      job
      id
      image {
        alt
        asset {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    Category: allSanityPost(
      filter: {
        categories: {
          elemMatch: { slug: { current: { eq: "news-and-opinions" } } }
        }
      }
      limit: 3
    ) {
      nodes {
        title
        slug {
          current
        }
        publishedAt(formatString: "MMM DD YYYY")
        id
        readingTimeInMinutes
        categories {
          title
          slug {
            current
          }
        }
        authors {
          author {
            name
            id
            position
            image {
              alt
              asset {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        mainImage {
          alt
          asset {
            gatsbyImageData(
              width: 700
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
