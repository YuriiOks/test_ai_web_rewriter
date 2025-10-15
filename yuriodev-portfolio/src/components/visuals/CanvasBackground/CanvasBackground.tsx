import { useEffect, useRef } from 'react';
import styles from './CanvasBackground.module.css';

type NodeColor = 'primary' | 'secondary' | 'tertiary';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  glow: number;
  color: NodeColor;
}

const NODE_COUNT = 60;
const INTERACTION_RADIUS = 120;
const REPULSION_STRENGTH = 0.6;
const DAMPING = 0.98;

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef<{ x?: number; y?: number }>({});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initializeNodes = () => {
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5,
        glow: Math.random() * 0.5 + 0.5,
        color: Math.random() > 0.7 ? 'secondary' : Math.random() > 0.5 ? 'tertiary' : 'primary',
      }));
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseOut = () => {
      mouseRef.current = {};
    };

    const getColorValue = (variant: NodeColor, style: CSSStyleDeclaration) => {
      switch (variant) {
        case 'secondary':
          return style.getPropertyValue('--accent-secondary').trim();
        case 'tertiary':
          return style.getPropertyValue('--accent-tertiary').trim();
        default:
          return style.getPropertyValue('--accent-primary').trim();
      }
    };

    const animate = () => {
      const style = getComputedStyle(document.body);
      const isLightMode = document.body.classList.contains('light-mode');
      const bgColor = isLightMode ? 'rgba(248, 250, 252, 0.05)' : 'rgba(10, 15, 28, 0.15)';

      context.fillStyle = bgColor;
      context.fillRect(0, 0, canvas.width, canvas.height);

      nodesRef.current.forEach(node => {
        const { x, y } = mouseRef.current;
        if (x !== undefined && y !== undefined) {
          const dxMouse = node.x - x;
          const dyMouse = node.y - y;
          const distanceMouse = Math.hypot(dxMouse, dyMouse);
          if (distanceMouse < INTERACTION_RADIUS) {
            const force = ((INTERACTION_RADIUS - distanceMouse) / INTERACTION_RADIUS) * REPULSION_STRENGTH;
            node.vx += (dxMouse / distanceMouse) * force;
            node.vy += (dyMouse / distanceMouse) * force;
          }
        }

        node.x += node.vx;
        node.y += node.vy;
        node.vx *= DAMPING;
        node.vy *= DAMPING;

        if (Math.abs(node.vx) < 0.05 && Math.abs(node.vy) < 0.05) {
          node.vx += (Math.random() - 0.5) * 0.1;
          node.vy += (Math.random() - 0.5) * 0.1;
        }

        if (node.x - node.radius < 0) {
          node.x = node.radius;
          node.vx *= -0.8;
        } else if (node.x + node.radius > canvas.width) {
          node.x = canvas.width - node.radius;
          node.vx *= -0.8;
        }

        if (node.y - node.radius < 0) {
          node.y = node.radius;
          node.vy *= -0.8;
        } else if (node.y + node.radius > canvas.height) {
          node.y = canvas.height - node.radius;
          node.vy *= -0.8;
        }

        const colorValue = getColorValue(node.color, style);
        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.shadowBlur = isLightMode ? 8 : 15;
        context.shadowColor = colorValue;
        context.fillStyle = colorValue;
        context.fill();
        context.shadowBlur = 0;
      });

      const maxConnections = NODE_COUNT * 1.5;
      let connectionCount = 0;
      for (let i = 0; i < nodesRef.current.length; i += 1) {
        let connectionsPerNode = 0;
        for (let j = i + 1; j < nodesRef.current.length; j += 1) {
          if (connectionsPerNode >= 4) break;

          const nodeA = nodesRef.current[i];
          const nodeB = nodesRef.current[j];
          const distance = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);
          if (distance < 180) {
            const opacity = (isLightMode ? 0.15 : 0.3) * ((180 - distance) / 180);
            const colorValue = distance < 90
              ? getColorValue('secondary', style)
              : getColorValue('primary', style);

            context.beginPath();
            context.moveTo(nodeA.x, nodeA.y);
            context.lineTo(nodeB.x, nodeB.y);
            context.strokeStyle = `${colorValue}${Math.round(opacity * 255)
              .toString(16)
              .padStart(2, '0')}`;
            context.lineWidth = 0.8;
            context.stroke();
            connectionsPerNode += 1;
            connectionCount += 1;
          }

          if (connectionCount > maxConnections) break;
        }
        if (connectionCount > maxConnections) break;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    initializeNodes();
    animate();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className={styles.wrapper} aria-hidden>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.scanlines} />
    </div>
  );
};

export default CanvasBackground;
