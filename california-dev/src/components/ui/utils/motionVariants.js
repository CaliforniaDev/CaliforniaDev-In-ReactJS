export const motionVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  },
  slideInFromTop: {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  },
};
