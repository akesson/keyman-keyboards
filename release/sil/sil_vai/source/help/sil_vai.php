<?php
  $pagename = 'Vai (SIL) Keyboard Help';
  $pagetitle = 'Vai (SIL) Keyboard Help';
  $pagestyle = <<<END
    table, table * {border-collapse: collapse;}
    table {border: 3px solid black;}
    tr,th, td {border: 1px solid black;}
    th, td { text-align: center; padding: 5px; width:3.0em;}
    span.vai {font-size: 1.5em; font-family: Dukor, Ebrima, sans-serif; }
    tr.vai td {font-size: 1.5em;}
    tr.vai th, tr.vai td {background-color:#eaeaea; }
END;
  require_once('header.php');
?>





  <h2>Introduction</h2>
  <p>This keyboard was developed for keyboarding the Vai Script. It is based on the old custom encoded keyboard, but it has been updated for Unicode. The majority of the keystrokes remain the same. (One significant difference is that an “x” is used instead of an “r” for the “o” forms.) The keyboard was developed for Keyman 6.0 (or greater) on any keyboard (US, UK, French, etc). </p>

  <p>The SIL keyboard is designed to work with any Unicode Vai font. For complete instructions on keyboard installation and usage, go to <a href="http://scripts.sil.org/KeyboardInstallationAndUse#KM_install">http://scripts.sil.org/KeyboardInstallationAndUse#KM_install</a>.</p>

  <h2>Keyboard assignments</h2>
  <p>In the chart below, what is in the keystroke column must be typed first followed by the “vowel” in the top of the corresponding column. For example, type “pe” for <span class="vai">ꔅ</span> or “bhq” for <span class="vai">ꗩ</span>.</p>

<table>
  <thead>
    <tr>
      <th>Keystrokes</th>
      <th>e</th>
      <th>i</th>
      <th>a</th>
      <th>o</th>
      <th>u</th>
      <th>x</th>
      <th>q</th>
    </tr>
  </thead>
  <tbody>
    <tr class="vai">
      <th>&nbsp;</th>
      <td>ꔀ</td>
      <td>ꔤ</td>
      <td>ꕉ</td>
      <td>ꕱ</td>
      <td>ꖕ</td>
      <td>ꖺ</td>
      <td>ꗡ</td>
    </tr>
    <tr>
      <th>&nbsp;</th>
      <td>A500</td>
      <td>A524</td>
      <td>A549</td>
      <td>A571</td>
      <td>A595</td>
      <td>A5BA</td>
      <td>A5E1</td>
    </tr>

    <tr class="vai">
      <th>~</th>
      <td>ꔁ</td>
      <td>ꔥ</td>
      <td>ꕊ</td>
      <td>ꕲ</td>
      <td>ꖖ</td>
      <td>ꖻ</td>
      <td>ꗢ</td>
    </tr>

    <tr>
      <th>&nbsp;</th>
      <td>A501</td>
      <td>A525</td>
      <td>A54A</td>
      <td>A572</td>
      <td>A596</td>
      <td>A5BB</td>
      <td>A5E2</td>
    </tr>

    <tr class="vai">
      <th>ng~</th>
      <td></td>
      <td></td>
      <td>ꕋ</td>
      <td></td>
      <td></td>
      <td>ꖼ</td>
      <td>ꗣ</td>
    </tr>

    <tr>
      <th>&nbsp;</th>
      <td></td>
      <td></td>
      <td>A54B</td>
      <td></td>
      <td></td>
      <td>A5BC</td>
      <td>A5E3</td>
    </tr>

    <tr class="vai">
      <th>h</th>
      <td>ꔂ</td>
      <td>ꔦ</td>
      <td>ꕌ</td>
      <td>ꕳ</td>
      <td>ꖗ</td>
      <td>ꖽ</td>
      <td>ꗤ</td>
    </tr>

    <tr>
      <th></th>
      <td>A502</td>
      <td>A526</td>
      <td>A54C</td>
      <td>A573</td>
      <td>A597</td>
      <td>A5BD</td>
      <td>A5E4</td>
    </tr>

    <tr class="vai">
      <th>h~</th>
      <td></td>
      <td>ꔧ</td>
      <td>ꕍ</td>
      <td></td>
      <td>ꖘ</td>
      <td>ꖾ</td>
      <td>ꗥ</td>
    </tr>
  <tr>
    <th></th>
    <td></td>
    <td>A527</td>
    <td>A54D</td>
    <td></td>
    <td>A598</td>
    <td>A5BE</td>
    <td>A5E5</td>
  </tr>

  <tr class="vai">
  <th>w</th>
  <td>ꔃ</td>
  <td>ꔨ</td>
  <td>ꕎ</td>
  <td>ꕴ</td>
  <td>ꖙ</td>
  <td>ꖿ</td>
  <td>ꗦ</td>
  </tr>
  <tr>
  <th></th>
  <td>A503</td>
  <td>A528</td>
  <td>A54E</td>
  <td>A574</td>
  <td>A599</td>
  <td>A5BF</td>
  <td>A5E6</td>
  </tr>
  <tr class="vai">
  <th>w~</th>
  <td>ꔄ</td>
  <td>ꔩ</td>
  <td>ꕏ</td>
  <td>ꕵ</td>
  <td>ꖚ</td>
  <td>ꗀ</td>
  <td>ꗧ</td>
  </tr>
  <tr>
  <th></th>
  <td>A504</td>
  <td>A529</td>
  <td>A54F</td>
  <td>A575</td>
  <td>A59A</td>
  <td>A5C0</td>
  <td>A5E7</td>
  </tr>
  <tr class="vai">
  <th>p</th>
  <td>ꔅ</td>
  <td>ꔪ</td>
  <td>ꕐ</td>
  <td>ꕶ</td>
  <td>ꖛ</td>
  <td>ꗁ</td>
  <td>ꗨ</td>
  </tr>
  <tr>
  <th></th>
  <td>A505</td>
  <td>A52A</td>
  <td>A550</td>
  <td>A576</td>
  <td>A59B</td>
  <td>A5C1</td>
  <td>A5E8</td>
  </tr>
  <tr class="vai">
  <th>bh</th>
  <td>ꔆ</td>
  <td>ꔫ</td>
  <td>ꕑ</td>
  <td>ꕷ</td>
  <td>ꖜ</td>
  <td>ꗂ</td>
  <td>ꗩ</td>
  </tr>
  <tr>
  <th></th>
  <td>A506</td>
  <td>A52B</td>
  <td>A551</td>
  <td>A577</td>
  <td>A59C</td>
  <td>A5C2</td>
  <td>A5E9</td>
  </tr>
  <tr class="vai">
  <th>b</th>
  <td>ꔇ</td>
  <td>ꔬ</td>
  <td>ꕒ</td>
  <td>ꕸ</td>
  <td>ꖝ</td>
  <td>ꗃ</td>
  <td>ꗪ</td>
  </tr>
  <tr>
  <th></th>
  <td>A507</td>
  <td>A52C</td>
  <td>A552</td>
  <td>A578</td>
  <td>A59D</td>
  <td>A5C3</td>
  <td>A5EA</td>
  </tr>
  <tr class="vai">
  <th>mb</th>
  <td>ꔈ</td>
  <td>ꔭ</td>
  <td>ꕓ</td>
  <td>ꕹ</td>
  <td>ꖞ</td>
  <td>ꗄ</td>
  <td>ꗫ</td>
  </tr>
  <tr>
    <th></th>
    <td>A508</td>
    <td>A52D</td>
    <td>A553</td>
    <td>A579</td>
    <td>A59E</td>
    <td>A5C4</td>
    <td>A5EB</td>
  </tr>
  <tr class="vai">
    <th>kp</th>
    <td>ꔉ</td>
    <td>ꔮ</td>
    <td>ꕔ</td>
    <td>ꕺ</td>
    <td>ꖟ</td>
    <td>ꗅ</td>
    <td>ꗬ</td>
  </tr>
  <tr>
    <th></th>
    <td>A509</td>
    <td>A52E</td>
    <td>A554</td>
    <td>A57A</td>
    <td>A59F</td>
    <td>A5C5</td>
    <td>A5EC</td>
  </tr>
  <tr class="vai">
    <th>kp~</th>
    <td></td>
    <td></td>
    <td>ꕕ</td>
    <td></td>
    <td></td>
    <td></td>
    <td>ꗭ</td>
  </tr>
  <tr>
    <th></th>
    <td></td>
    <td></td>
    <td>A555</td>
    <td></td>
    <td></td>
    <td></td>
    <td>A5ED</td>
  </tr>
  <tr class="vai">
    <th>mgb</th>
    <td>ꔊ</td>
    <td>ꔯ</td>
    <td>ꕖ</td>
    <td>ꕻ</td>
    <td>ꖠ</td>
    <td>ꗆ</td>
    <td>ꗮ</td>
  </tr>
  <tr>
    <th></th>
    <td>A50A</td>
    <td>A52F</td>
    <td>A556</td>
    <td>A57B</td>
    <td>A5A0</td>
    <td>A5C6</td>
    <td>A5EE</td>
  </tr>


  <tr class="vai">
    <th>gb</th>
    <td>ꔋ</td>
    <td>ꔰ</td>
    <td>ꕗ</td>
    <td>ꕼ</td>
    <td>ꖡ</td>
    <td>ꗇ</td>
    <td>ꗯ</td>
  </tr>
  <tr>
    <th></th>
    <td>A50B</td>
    <td>A530</td>
    <td>A557</td>
    <td>A57C</td>
    <td>A5A1</td>
    <td>A5C7</td>
    <td>A5EF</td>
  </tr>
  <tr class="vai">
    <th>gb~</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>ꗈ</td>
    <td>ꗰ</td>
  </tr>
  <tr>
    <th></th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>A5C8</td>
    <td>A5F0</td>
  </tr>
  <tr class="vai">
    <th>f</th>
    <td>ꔌ</td>
    <td>ꔱ</td>
    <td>ꕘ</td>
    <td>ꕽ</td>
    <td>ꖢ</td>
    <td>ꗉ</td>
    <td>ꗱ</td>
  </tr>
  <tr>
    <th></th>
    <td>A50C</td>
    <td>A531</td>
    <td>A558</td>
    <td>A57D</td>
    <td>A5A2</td>
    <td>A5C9</td>
    <td>A5F1</td>
  </tr>
  <tr class="vai">
    <th>v</th>
    <td>ꔍ</td>
    <td>ꔲ</td>
    <td>ꕙ</td>
    <td>ꕾ</td>
    <td>ꖣ</td>
    <td>ꗊ</td>
    <td>ꗲ</td>
  </tr>
  <tr>
    <th></th>
    <td>A50D</td>
    <td>A532</td>
    <td>A559</td>
    <td>A57E</td>
    <td>A5A3</td>
    <td>A5CA</td>
    <td>A5F2</td>
  </tr>
  <tr class="vai">
    <th>t</th>
    <td>ꔎ</td>
    <td>ꔳ</td>
    <td>ꕚ</td>
    <td>ꕿ</td>
    <td>ꖤ</td>
    <td>ꗋ</td>
    <td>ꗳ</td>
  </tr>
  <tr>
    <th></th>
    <td>A50E</td>
    <td>A533</td>
    <td>A55A</td>
    <td>A57F</td>
    <td>A5A4</td>
    <td>A5CB</td>
    <td>A5F3</td>
  </tr>
  <tr class="vai">
    <th>th</th>
    <td>ꔏ</td>
    <td>ꔴ</td>
    <td>ꕛ</td>
    <td>ꖀ</td>
    <td>ꖥ</td>
    <td>ꗌ</td>
    <td>ꗴ</td>
  </tr>
  <tr>
    <th></th>
    <td>A50F</td>
    <td>A534</td>
    <td>A55B</td>
    <td>A580</td>
    <td>A5A5</td>
    <td>A5CC</td>
    <td>A5F4</td>
  </tr>
  <tr class="vai">
    <th>d</th>
    <td>ꔐ</td>
    <td>ꔵ</td>
    <td>ꕜ</td>
    <td>ꖁ</td>
    <td>ꖦ</td>
    <td>ꗍ</td>
    <td>ꗵ</td>
  </tr>
  <tr>
    <th></th>
    <td>A510</td>
    <td>A535</td>
    <td>A55C</td>
    <td>A581</td>
    <td>A5A6</td>
    <td>A5CD</td>
    <td>A5F5</td>
  </tr>
  <tr class="vai">
    <th>dh</th>
    <td>ꔑ</td>
    <td>ꔶ</td>
    <td>ꕝ</td>
    <td>ꖂ</td>
    <td>ꖧ</td>
    <td>ꗎ</td>
    <td>ꗶ</td>
  </tr>
  <tr>
    <th></th>
    <td>A511</td>
    <td>A536</td>
    <td>A55D</td>
    <td>A582</td>
    <td>A5A7</td>
    <td>A5CE</td>
    <td>A5F6</td>
  </tr>
  <tr class="vai">
    <th>l</th>
    <td>ꔒ</td>
    <td>ꔷ</td>
    <td>ꕞ</td>
    <td>ꖃ</td>
    <td>ꖨ</td>
    <td>ꗏ</td>
    <td>ꗷ</td>
  </tr>
  <tr>
    <th></th>
    <td>A512</td>
    <td>A537</td>
    <td>A55E</td>
    <td>A583</td>
    <td>A5A8</td>
    <td>A5CF</td>
    <td>A5F7</td>
  </tr>
  <tr class="vai">
    <th>r</th>
    <td>ꔓ</td>
    <td>ꔸ</td>
    <td>ꕟ</td>
    <td>ꖄ</td>
    <td>ꖩ</td>
    <td>ꗐ</td>
    <td>ꗸ</td>
  </tr>
  <tr>
    <th></th>
    <td>A513</td>
    <td>A538</td>
    <td>A55F</td>
    <td>A584</td>
    <td>A5A9</td>
    <td>A5D0</td>
    <td>A5F8</td>
  </tr>
  <tr class="vai">
    <th>dl</th>
    <td>ꔔ</td>
    <td>ꔹ</td>
    <td>ꕠ</td>
    <td>ꖅ</td>
    <td>ꖪ</td>
    <td>ꗑ</td>
    <td>ꗹ</td>
  </tr>
  <tr>
    <th></th>
    <td>A514</td>
    <td>A539</td>
    <td>A560</td>
    <td>A585</td>
    <td>A5AA</td>
    <td>A5D1</td>
    <td>A5F9</td>
  </tr>

  <tr class="vai">
  <th>nd</th>
  <td>ꔕ</td>
  <td>ꔺ</td>
  <td>ꕡ</td>
  <td>ꖆ</td>
  <td>ꖫ</td>
  <td>ꗒ</td>
  <td>ꗺ</td>
  </tr>
  <tr>
  <th></th>
  <td>A515</td>
  <td>A53A</td>
  <td>A561</td>
  <td>A586</td>
  <td>A5AB</td>
  <td>A5D2</td>
  <td>A5FA</td>
  </tr>
  <tr class="vai">
    <th>s</th>
    <td>ꔖ</td>
    <td>ꔻ</td>
    <td>ꕢ</td>
    <td>ꖇ</td>
    <td>ꖬ</td>
    <td>ꗓ</td>
    <td>ꗻ</td>
  </tr>
  <tr>
    <th></th>
    <td>A516</td>
    <td>A53B</td>
    <td>A562</td>
    <td>A587</td>
    <td>A5AC</td>
    <td>A5D3</td>
    <td>A5FB</td>
  </tr>
  <tr class="vai">
    <th>sh</th>
    <td>ꔗ</td>
    <td>ꔼ</td>
    <td>ꕣ</td>
    <td>ꖈ</td>
    <td>ꖭ</td>
    <td>ꗔ</td>
    <td>ꗼ</td>
  </tr>
  <tr>
    <th></th>
    <td>A517</td>
    <td>A53C</td>
    <td>A563</td>
    <td>A588</td>
    <td>A5AD</td>
    <td>A5D4</td>
    <td>A5FC</td>
  </tr>




  <tr class="vai">
    <th>z</th>
    <td>ꔘ</td>
    <td>ꔽ</td>
    <td>ꕤ</td>
    <td>ꖉ</td>
    <td>ꖮ</td>
    <td>ꗕ</td>
    <td>ꗽ</td>
  </tr>
  <tr>
    <th></th>
    <td>A518</td>
    <td>A53D</td>
    <td>A564</td>
    <td>A589</td>
    <td>A5AE</td>
    <td>A5D5</td>
    <td>A5FD</td>
  </tr>
  <tr class="vai">
    <th>zh</th>
    <td>ꔙ</td>
    <td>ꔾ</td>
    <td>ꕥ</td>
    <td>ꖊ</td>
    <td>ꖯ</td>
    <td>ꗖ</td>
    <td>ꗾ</td>
  </tr>
  <tr>
    <th></th>
    <td>A519</td>
    <td>A53E</td>
    <td>A565</td>
    <td>A58A</td>
    <td>A5AF</td>
    <td>A5D6</td>
    <td>A5FE</td>
  </tr>
  <tr class="vai">
    <th>c</th>
    <td>ꔚ</td>
    <td>ꔿ</td>
    <td>ꕦ</td>
    <td>ꖋ</td>
    <td>ꖰ</td>
    <td>ꗗ</td>
    <td>ꗿ</td>
  </tr>
  <tr>
    <th></th>
    <td>A51A</td>
    <td>A53F</td>
    <td>A566</td>
    <td>A58B</td>
    <td>A5B0</td>
    <td>A5D7</td>
    <td>A5FF</td>
  </tr>
  <tr class="vai">
    <th>j</th>
    <td>ꔛ</td>
    <td>ꕀ</td>
    <td>ꕧ</td>
    <td>ꖌ</td>
    <td>ꖱ</td>
    <td>ꗘ</td>
    <td>ꘀ</td>
  </tr>
  <tr>
    <th></th>
    <td>A51B</td>
    <td>A540</td>
    <td>A567</td>
    <td>A58C</td>
    <td>A5B1</td>
    <td>A5D8</td>
    <td>A600</td>
  </tr>
  <tr class="vai">
    <th>nj</th>
    <td>ꔜ</td>
    <td>ꕁ</td>
    <td>ꕨ</td>
    <td>ꖍ</td>
    <td>ꖲ</td>
    <td>ꗙ</td>
    <td>ꘁ</td>
  </tr>
  <tr>
    <th></th>
    <td>A51C</td>
    <td>A541</td>
    <td>A568</td>
    <td>A58D</td>
    <td>A5B2</td>
    <td>A5D9</td>
    <td>A601</td>
  </tr>
  <tr class="vai">
    <th>y</th>
    <td>ꔝ</td>
    <td>ꕂ</td>
    <td>ꕩ</td>
    <td>ꖎ</td>
    <td>ꖳ</td>
    <td>ꗚ</td>
    <td>ꘂ</td>
  </tr>
  <tr>
    <th></th>
    <td>A51D</td>
    <td>A542</td>
    <td>A569</td>
    <td>A58E</td>
    <td>A5B3</td>
    <td>A5DA</td>
    <td>A602</td>
  </tr>
  <tr class="vai">
    <th>k</th>
    <td>ꔞ</td>
    <td>ꕃ</td>
    <td>ꕪ</td>
    <td>ꖏ</td>
    <td>ꖴ</td>
    <td>ꗛ</td>
    <td>ꘃ</td>
  </tr>
  <tr>
    <th></th>
    <td>A51E</td>
    <td>A543</td>
    <td>A56A</td>
    <td>A58F</td>
    <td>A5B4</td>
    <td>A5DB</td>
    <td>A603</td>
  </tr>
  <tr class="vai">
    <th>k~</th>
    <td></td>
    <td></td>
    <td>ꕫ</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th></th>
    <td></td>
    <td></td>
    <td>A56B</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr class="vai">
    <th>ng</th>
    <td>ꔟ</td>
    <td>ꕄ</td>
    <td>ꕬ</td>
    <td>ꖐ</td>
    <td>ꖵ</td>
    <td>ꗜ</td>
    <td>ꘄ</td>
  </tr>
  <tr>
    <th></th>
    <td>A51F</td>
    <td>A544</td>
    <td>A56C</td>
    <td>A590</td>
    <td>A5B5</td>
    <td>A5DC</td>
    <td>A604</td>
  </tr>
  <tr class="vai">
    <th>ngg~</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>ꘅ</td>
  </tr>
  <tr>
    <th></th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>A605</td>
  </tr>
  <tr class="vai">
    <th>g</th>
    <td>ꔠ</td>
    <td>ꕅ</td>
    <td>ꕭ</td>
    <td>ꖑ</td>
    <td>ꖶ</td>
    <td>ꗝ</td>
    <td>ꘆ</td>
  </tr>
  <tr>
    <th></th>
    <td>A520</td>
    <td>A545</td>
    <td>A56D</td>
    <td>A591</td>
    <td>A5B6</td>
    <td>A5DD</td>
    <td>A606</td>
  </tr>
  <tr class="vai">
    <th>g~</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>ꘇ</td>
  </tr>
  <tr>
    <th></th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>A607</td>
  </tr>
  <tr class="vai">
    <th>m</th>
    <td>ꔡ</td>
    <td>ꕆ</td>
    <td>ꕮ</td>
    <td>ꖒ</td>
    <td>ꖷ</td>
    <td>ꗞ</td>
    <td>ꘈ</td>
  </tr>
  <tr>
    <th></th>
    <td>A521</td>
    <td>A546</td>
    <td>A56E</td>
    <td>A592</td>
    <td>A5B7</td>
    <td>A5DE</td>
    <td>A608</td>
  </tr>
  <tr class="vai">
    <th>n</th>
    <td>ꔢ</td>
    <td>ꕇ</td>
    <td>ꕯ</td>
    <td>ꖓ</td>
    <td>ꖸ</td>
    <td>ꗟ</td>
    <td>ꘉ</td>
  </tr>
  <tr>
    <th></th>
    <td>A522</td>
    <td>A547</td>
    <td>A56F</td>
    <td>A593</td>
    <td>A5B8</td>
    <td>A5DF</td>
    <td>A609</td>
  </tr>
  <tr class="vai">
    <th>ny</th>
    <td>ꔣ</td>
    <td>ꕈ</td>
    <td>ꕰ</td>
    <td>ꖔ</td>
    <td>ꖹ</td>
    <td>ꗠ</td>
    <td>ꘊ</td>
  </tr>
  <tr>
    <th></th>
    <td>A523</td>
    <td>A548</td>
    <td>A570</td>
    <td>A594</td>
    <td>A5B9</td>
    <td>A5E0</td>
    <td>A60A</td>

  </tr>
</tbody>
<tfoot>
  <tr>
    <th>Keystrokes</th>
    <th>e</th>
    <th>i</th>
    <th>a</th>
    <th>o</th>
    <th>u</th>
    <th>x</th>
    <th>q</th>
  </tr>
</tfoot>
</table>

<h3>Other</h3>
<table>
  <thead>
    <tr>
      <th>Keystroke</th>
      <th>Character</th>
    </tr>
  </thead>
  <tbody>
    <tr class="vai">
      <th>x</th>
      <td>ꘋ</td>
    <tr>
      <th></th>
      <td>A60B</td>
    </tr>
  </tbody>
</table>

<h3>Punctuation</h3>
<table>
  <thead>
    <tr>
      <th>Keystroke</th>
      <th>Character</th>
    </tr>
  </thead>
  <tbody>
    <tr class="vai">
      <th>.</th>
      <td>꘎</td>
    <tr>
      <th></th>
      <td>A60E</td>
    </tr>
    <tr class="vai">
      <th>,</th>
      <td>꘍</td>
    <tr>
      <th></th>
      <td>A60D</td>
    </tr>
    <tr class="vai">
      <th>?</th>
      <td>꘏</td>
    <tr>
      <th></th>
      <td>A60F</td>
    </tr>
    <tr class="vai">
      <th>=</th>
      <td>ꘌ</td>
    <tr>
      <th></th>
      <td>A60C</td>
    </tr>
    <tr class="vai">
      <th>..</th>
      <td>.</td>
    <tr>
      <th></th>
      <td>002E</td>
    </tr>
    <tr class="vai">
      <th>,,</th>
      <td>,</td>
    <tr>
      <th></th>
      <td>002C</td>
    </tr>
    <tr class="vai">
      <th>??</th>
      <td>?</td>
    <tr>
      <th></th>
      <td>003F</td>
    </tr>
    <tr class="vai">
      <th>==</th>
      <td>=</td>
    <tr>
      <th></th>
      <td>003D</td>
    </tr>
  </tbody>
</table>
