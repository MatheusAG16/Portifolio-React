import React, { Children, cloneElement } from 'react';
import { useInView } from 'react-intersection-observer';
import animationStyles from './animation.module.css';

function AnimaAoAparecer({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const child = Children.only(children);

  const classesFinais = `
    ${child.props.className || ''} 
    ${animationStyles.fadeIn} 
    ${inView ? animationStyles.isVisible : ''}
  `;
  
  const clonedChild = cloneElement(
    child,
    {
      ref: ref,
      className: classesFinais.trim() 
    }
  );

  console.log(clonedChild)

  return clonedChild; 
}

export default AnimaAoAparecer;