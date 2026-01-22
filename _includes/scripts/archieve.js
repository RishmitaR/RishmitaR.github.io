(function ($) {
  if (!$) {
    console.error("jQuery is required for archive filtering.");
    return;
  }

  $(function () {
    var $tags = $('.js-tags');
    var $articleTags = $tags.find('button');
    var $tagShowAll = $tags.find('.tag-button--all');
    var $result = $('.js-result');
    var $sections = $result.find('section');

    var sectionArticles = [];
    var hasInit = false;
    var lastFocusedButton = null;

    // Collect articles per section
    $sections.each(function () {
      sectionArticles.push($(this).find('.item'));
    });

    function getQueryTag() {
      var params = new URLSearchParams(window.location.search);
      return params.get('tag');
    }

    function setUrlQuery(tag) {
      var baseUrl = window.location.href.split('?')[0];
      if (tag) {
        window.history.replaceState(null, '', baseUrl + '?tag=' + tag);
      } else {
        window.history.replaceState(null, '', baseUrl);
      }
    }

    function buttonFocus($btn) {
      if (!$btn || !$btn.length) return;
      if (lastFocusedButton && !lastFocusedButton.is($btn)) {
        lastFocusedButton.removeClass('focus');
      }
      $btn.addClass('focus');
      lastFocusedButton = $btn;
    }

    function tagSelect(tag, $btn) {
      var result = {};
      var i, j;

      for (i = 0; i < sectionArticles.length; i++) {
        var $articles = sectionArticles[i];
        for (j = 0; j < $articles.length; j++) {
          if (!tag) {
            result[i] = result[i] || {};
            result[i][j] = true;
          } else {
            var tags = ($articles.eq(j).data('tags') || '').split(',');
            if (tags.includes(tag)) {
              result[i] = result[i] || {};
              result[i][j] = true;
            }
          }
        }
      }

      // Apply visibility
      for (i = 0; i < sectionArticles.length; i++) {
        var hasSection = !!result[i];
        $sections.eq(i).toggleClass('d-none', !hasSection);

        for (j = 0; j < sectionArticles[i].length; j++) {
          var show = hasSection && result[i][j];
          sectionArticles[i].eq(j).toggleClass('d-none', !show);
        }
      }

      if (!hasInit) {
        $result.removeClass('d-none');
        hasInit = true;
      }

      if ($btn) {
        buttonFocus($btn);
        setUrlQuery(tag);
      }
    }

    // Initial load
    var initialTag = getQueryTag();
    tagSelect(initialTag);

    // Button click handling
    $tags.on('click', 'button', function () {
      var $btn = $(this);
      var tag = $btn.data('encode') || '';
      tagSelect(tag, $btn);
    });
  });

})(window.jQuery);
