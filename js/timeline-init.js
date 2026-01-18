document.addEventListener("DOMContentLoaded", () => {
  // Timeline constructor accepts a selector and a JSON file path
  window.timeline = new TL.Timeline('career-timeline', 'data/timeline.json', {
    language: 'en',
    width: '100%',
    height: '600'
  });
});