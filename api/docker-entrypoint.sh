#!/bin/bash
if [ ! -d "/app/node_modules" ]; then
    npm install
fi
npm run dev

