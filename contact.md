---
layout: page
title: Contact
permalink: /contact/
---

<section class="container content-section contact-section">

    <p>Drop us a line using the form below, or call <a href="tel:+441225300234">01225 300234</a>.</p>

    <form action="/thanks/" method="post">

      <fieldset>
            <input type="text" name="_gotcha" style="display:none" />
            <input type="hidden" name="_to" value="a.ward@eyedivision.com">
            <input type="hidden" name="_subject" value="Web form">
            <p>
            <label for="name">Name:</label>
            <input type="text" name="name">
            </p>
            <p>
            <label for="_replyto">Email:</label>
            <input type="email" name="_replyto">
            </p>
            <p>
            <label>Message</label>
            <textarea name="message"></textarea>
            </p>
            {% if site.recaptcha_site_key %}
            <div class="g-recaptcha" data-sitekey="{{ site.recaptcha_site_key }}"></div>
            {% endif %}
        <p>
            <input type="submit" value="Send message">
            </p>
      </fieldset>

      </form>

  </section>
