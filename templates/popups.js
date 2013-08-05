{{#services}}
  <div class="modal-header">
    <button data-dismiss="modal" class="close" type="button">×</button>
    <img src="logo/{{id}}.png" alt="" class="pull-left favlogo" height="36" >
    <h3> {{name}}
      <small class="service-url">
        Share review 
        <input class="share-link" type="text" value="http://tosdr.org/#{{id}}" readonly />
      </small>
    </h3>
  </div>

  <div class="modal-body">
    <div class="tosdr-rating">
      <label class="label {{tosdr.rated}}">
        {{#tosdr.rated}}Class {{tosdr.rated}}{{/tosdr.rated}
        {{^tosdr.rated}} No Class Yet{{/tosdr.rated}}
      </label>
      <p>{{ratingText}}</p>
    </div>
    <section class="specificissues">
      <ul class="tosdr-points">
        {{#points}}
          <li id="popup-point-{{service}}-{{id}}" class="point">
            <div class="{{tosdr.case.point}}">
              <h5>
                <span class-"badge badge-{{badge}}" title="{{tosdr.case.point}}">
                  <i class="icon-{{icon}} icon-white">{{sign}}</i>
                </span>
                {{name}} 
                <a href="discussion" target="_blank" class="label context">
                  Discussion
                </a>
              </h5>
              <p>
                {{{tosdr.tldr}}}
              </p>
            </div>
          </li>
        {{/points}}
      </ul>
      <section>
        {{^^links}}
          <h4>Read the Terms</h4>
          <ul class="tosback2"> 
            {{#links}}
              <li>
                <a href="{{url}}">
                  {{#name}}{{name}}{{/name}}
                  {{^name}}{{#}}{{/name}}
                </a>
              </li>
            {{/links}}
          </ul>
        {{/links}}
        {{^links}}
          <a href="/get-involved.html" class="btn">
            Help us find the Terms »
          </a>
        {{/links}}
      </section>
    </section>
  </div>
{{/services}}