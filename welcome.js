
anime({
    targets: '.letter',
    opacity: [0, 1],
    translateX: ['-250px', '0px'],
    easing: 'easeOutCubic',
    duration: 2000,
  })
  anime({
    targets: '#next',
    opacity: [0, 1],
    translateX: ['250px', '0px'],
    easing: 'easeOutCubic',
    duration: 2000,
  })

  anime({
    targets: '#sweep',
    translateX: 2500,
    delay:1000,
    duration: 50000
  });