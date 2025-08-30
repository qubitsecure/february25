// filepath: /Users/bjs/Desktop/2025vscode/february25/src/components/P5Sketch.js
import React from 'react';
import useP5 from '../hooks/useP5';

const P5Sketch = () => {
    const sketch = (p5) => {
        let cubes = [];
        const initialSize = 200;

        p5.setup = () => {
            p5.createCanvas(800, 600, p5.WEBGL);
            p5.colorMode(p5.HSB, 360, 100, 100);
            cubes = generateMengerCubes(2, 0, 0, 0, initialSize);
        };

        p5.draw = () => {
            p5.background(0);
            p5.ambientLight(50);
            const lightAngle = p5.frameCount * 0.02;
            const lightX = p5.cos(lightAngle) * 300;
            const lightZ = p5.sin(lightAngle) * 300;
            p5.pointLight(255, 255, 255, lightX, 0, lightZ);

            p5.rotateY(p5.frameCount * 0.01);
            p5.shininess(20);

            for (let cube of cubes) {
                p5.push();
                p5.translate(cube.x, cube.y, cube.z);
                const hue = p5.map(cube.x, -initialSize / 2, initialSize / 2, 0, 360);
                p5.specularMaterial(p5.color(hue, 80, 100));
                p5.box(cube.size);
                p5.pop();
            }
        };

        const generateMengerCubes = (depth, x, y, z, size) => {
            if (depth === 0) {
                return [{ x, y, z, size }];
            } else {
                let cubesArray = [];
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        for (let k = 0; k < 3; k++) {
                            if (isValid(i, j, k)) {
                                const newX = x + (i - 1) * size / 3;
                                const newY = y + (j - 1) * size / 3;
                                const newZ = z + (k - 1) * size / 3;
                                const smallerCubes = generateMengerCubes(depth - 1, newX, newY, newZ, size / 3);
                                cubesArray = cubesArray.concat(smallerCubes);
                            }
                        }
                    }
                }
                return cubesArray;
            }
        };

        const isValid = (i, j, k) => {
            let count = 0;
            if (i === 1) count++;
            if (j === 1) count++;
            if (k === 1) count++;
            return count < 2;
        };
    };

    const sketchRef = useP5(sketch);

    return <div ref={sketchRef}></div>;
};

export default P5Sketch;