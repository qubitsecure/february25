
import P5Sketch from "./components/P5Sketch";
import useP5 from "./hooks/useP5";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

let cubes = []; // Array to store all cube positions and sizes
const initialSize = 200; // Initial size of the sponge

function setup() {
  createCanvas(800, 600, WEBGL); // Enable 3D rendering
  colorMode(HSB, 360, 100, 100); // Use Hue, Saturation, Brightness color mode
  cubes = generateMengerCubes(2, 0, 0, 0, initialSize); // Generate Menger sponge
}

function draw() {
  background(0); // Set background to black

  // Lighting setup
  ambientLight(50); // Soft ambient light
  let lightAngle = frameCount * 0.02; // Orbiting light angle
  let lightX = cos(lightAngle) * 300; // X position of orbiting light
  let lightZ = sin(lightAngle) * 300; // Z position of orbiting light
  pointLight(255, 255, 255, lightX, 0, lightZ); // White orbiting light

  // Center and rotate the sponge
  translate(width / 2, height / 2, -200); // Move back for visibility
  rotateY(frameCount * 0.01); // Rotate around Y-axis
  shininess(20); // Set shininess for specular highlights

  // Draw each cube in the sponge
  for (let cube of cubes) {
    push(); // Save transformation state
    translate(cube.x, cube.y, cube.z); // Move to cube's position
    let hue = map(cube.x, -initialSize / 2, initialSize / 2, 0, 360); // Map x-position to hue
    specularMaterial(color(hue, 80, 100)); // Set material color
    box(cube.size); // Draw cube
    pop(); // Restore transformation state
  }
}

// Generate array of cubes for the Menger sponge
function generateMengerCubes(depth, x, y, z, size) {
  if (depth === 0) {
    return [{ x, y, z, size }]; // Base case: return single cube
  } else {
    let cubesArray = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          if (isValid(i, j, k)) { // Include only valid positions
            let newX = x + (i - 1) * size / 3;
            let newY = y + (j - 1) * size / 3;
            let newZ = z + (k - 1) * size / 3;
            let smallerCubes = generateMengerCubes(depth - 1, newX, newY, newZ, size / 3);
            cubesArray = cubesArray.concat(smallerCubes);
          }
        }
      }
    }
    return cubesArray;
  }
}

// Check if a position in the 3x3x3 grid is part of the sponge
function isValid(i, j, k) {
  let count = 0;
  if (i === 1) count++;
  if (j === 1) count++;
  if (k === 1) count++;
  return count < 2; // True if fewer than 2 indices are 1
}

