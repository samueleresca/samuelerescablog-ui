export default function toTheTopNeverStop() {
    const scrollToTopBtn = document.querySelector('#scroll-to-top');

  const displayOffset = 1200;

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > displayOffset || document.documentElement.scrollTop > displayOffset) {
          scrollToTopBtn.style.display = "block";
        } else {
          scrollToTopBtn.style.display = "none";
        }
      }
    
    scrollToTopBtn.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}
