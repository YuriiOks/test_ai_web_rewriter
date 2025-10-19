import React, { useRef, useEffect } from 'react';
import styles from './CanvasBackground.module.css';

const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mouse: { x: number | undefined, y: number | undefined } = { x: undefined, y: undefined };
    const interactionRadius = 120;
    const repulsionStrength = 0.6;
    const dampingFactor = 0.98;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      glow: number;
      color: string;
    }[] = [];
    const numNodes = 60;

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5,
        glow: Math.random() * 0.5 + 0.5,
        color: Math.random() > 0.7 ? 'var(--accent-secondary)' : (Math.random() > 0.5 ? 'var(--accent-tertiary)' : 'var(--accent-primary)'),
      });
    }

    const animate = () => {
      const isDarkMode = document.documentElement.getAttribute('data-theme') !== 'light';
      const bgOpacity = isDarkMode ? 0.15 : 0.05;

      ctx.fillStyle = isDarkMode ? `rgba(10, 15, 28, ${bgOpacity})` : `rgba(248, 250, 252, ${bgOpacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const style = getComputedStyle(document.body);
      const accentPrimary = style.getPropertyValue('--accent-primary').trim();
      const accentSecondary = style.getPropertyValue('--accent-secondary').trim();
      const accentTertiary = style.getPropertyValue('--accent-tertiary').trim();

      nodes.forEach((node) => {
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dxMouse = node.x - mouse.x;
          const dyMouse = node.y - mouse.y;
          const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distanceMouse < interactionRadius) {
            const forceDirectionX = dxMouse / distanceMouse;
            const forceDirectionY = dyMouse / distanceMouse;
            const force = (interactionRadius - distanceMouse) / interactionRadius * repulsionStrength;
            node.vx += forceDirectionX * force;
            node.vy += forceDirectionY * force;
          }
        }

        node.x += node.vx;
        node.y += node.vy;
        node.vx *= dampingFactor;
        node.vy *= dampingFactor;

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

        let nodeColorValue;
        if (node.color === 'var(--accent-secondary)') nodeColorValue = accentSecondary;
        else if (node.color === 'var(--accent-tertiary)') nodeColorValue = accentTertiary;
        else nodeColorValue = accentPrimary;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        let alphaHex = Math.floor(node.glow * (isDarkMode ? 200 : 100)).toString(16).padStart(2, '0');
        alphaHex = alphaHex.length > 2 ? alphaHex.substring(0, 2) : alphaHex;
        try {
          ctx.fillStyle = nodeColorValue + alphaHex;
        } catch {
          ctx.fillStyle = nodeColorValue;
        }
        ctx.shadowBlur = isDarkMode ? 15 : 8;
        ctx.shadowColor = nodeColorValue;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      const maxConnectionsPerNode = 4;
      let connectionsDrawn = 0;

      for (let i = 0; i < nodes.length; i++) {
        let nodeConnections = 0;
        for (let j = i + 1; j < nodes.length; j++) {
          if (nodeConnections >= maxConnectionsPerNode) break;

          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const opacity = (isDarkMode ? 0.3 : 0.15) * (180 - distance) / 180;
            const connectionColorValue = distance < 90 ? accentSecondary : accentPrimary;
            let alphaHexConnection = Math.floor(opacity * 255).toString(16).padStart(2, '0');
            alphaHexConnection = alphaHexConnection.length > 2 ? alphaHexConnection.substring(0, 2) : alphaHexConnection;
            try {
              ctx.strokeStyle = connectionColorValue + alphaHexConnection;
            } catch {
              ctx.strokeStyle = connectionColorValue;
            }
            ctx.lineWidth = 0.8;
            ctx.stroke();
            nodeConnections++;
            connectionsDrawn++;
          }
          if (connectionsDrawn > numNodes * 1.5) break;
        }
        if (connectionsDrawn > numNodes * 1.5) break;
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.neuralBackground} aria-hidden="true"></canvas>;
};

export default CanvasBackground;
