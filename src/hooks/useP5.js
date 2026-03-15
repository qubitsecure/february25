// filepath: /Users/bjs/Desktop/2025vscode/february25/src/hooks/useP5.js
import { useEffect, useRef } from 'react';
import p5 from 'p5';

const useP5 = (sketch) => {
    const sketchRef = useRef();

    useEffect(() => {
        const p5Instance = new p5(sketch, sketchRef.current);
        return () => p5Instance.remove(); // Cleanup on unmount
    }, [sketch]);

    return sketchRef;
};

export default useP5;