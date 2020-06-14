<script>
  import { fly } from "svelte/transition";

  let messages = [];
  let messageText = "";
  function addMessage() {
    if (!messageText.length) {
      messageText = "Default message reply example";
    }
    messages = [...messages, { text: messageText }];
  }
</script>

<div class="w-full max-w-2xl mx-auto">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <div
        class="shadow appearance-none border border-gray-500 bg-gray-200 rounded
        w-full py-12 px-5 text-gray-700 leading-tight focus:outline-none
        focus:shadow-outline overflow-hidden">
        <div
          class="bg-gray-600 italic font-serif text-white p-10 border rounded
          flex flex-row items-center justify-start">
          <!-- <img
            src={image}
            alt=""
            width="70px"
            height="70px"
            class="rounded-full mr-5 border border-gray-800 p-1 bg-gray-800" /> -->
          <div>"Message text goes here this is an example"</div>
        </div>
        {#each messages as m}
          <div
            class="bg-purple-600 italic font-serif text-white p-10 border
            rounded flex flex-row items-center justify-end"
            transition:fly={{ y: 200, duration: 300 }}>
            <div class="mr-5">
              <p>"{m.text}"</p>
              <div class="bg-purple-800 rounded-full p-1 max-w-xs inline-block">
                <svg
                  xmlns:dc="http://purl.org/dc/elements/1.1/"
                  xmlns:cc="http://creativecommons.org/ns#"
                  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                  xmlns:svg="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                  viewBox="0 -256 1792 1792"
                  version="1.1"
                  inkscape:version="0.48.3.1 r9886"
                  width="25px"
                  height="25px">
                  <metadata id="metadata3047">
                    <rdf:RDF>
                      <cc:Work rdf:about="">
                        <dc:format>image/svg+xml</dc:format>
                        <dc:type
                          rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                      </cc:Work>
                    </rdf:RDF>
                  </metadata>
                  <defs id="defs3045" />
                  <g
                    transform="matrix(1,0,0,-1,205.01695,1300.6102)"
                    id="g3039">
                    <path
                      d="m 1404,151 q 0,-117 -79,-196 -79,-79 -196,-79 -135,0
                      -235,100 L 117,752 Q 4,867 4,1023 q 0,159 110,270 110,111
                      269,111 158,0 273,-113 l 605,-606 q 10,-10 10,-22 0,-16
                      -30.5,-46.5 Q 1210,586 1194,586 q -13,0 -23,10 l -606,607
                      q -79,77 -181,77 -106,0 -179,-75 -73,-75 -73,-181 0,-105
                      76,-181 L 984,66 q 63,-63 145,-63 64,0 106,42 42,42 42,106
                      0,82 -63,145 L 633,877 q -26,24 -60,24 -29,0 -48,-19
                      -19,-19 -19,-48 0,-32 25,-59 L 941,365 q 10,-10 10,-22
                      0,-16 -31,-47 -31,-31 -47,-31 -12,0 -22,10 L 441,685 q
                      -63,61 -63,149 0,82 57,139 57,57 139,57 88,0 149,-63 l
                      581,-581 q 100,-98 100,-235 z"
                      id="path3041"
                      inkscape:connector-curvature="0"
                      style="fill:currentColor" />
                  </g>
                </svg>
              </div>
              <div class="bg-purple-800 rounded-full p-1 max-w-xs inline-block">
                <svg
                  xmlns:dc="http://purl.org/dc/elements/1.1/"
                  xmlns:cc="http://creativecommons.org/ns#"
                  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                  xmlns:svg="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                  viewBox="0 -256 1792 1792"
                  id="svg3013"
                  version="1.1"
                  inkscape:version="0.48.3.1 r9886"
                  width="25px"
                  height="25px"
                  sodipodi:docname="phone_font_awesome.svg">
                  <metadata id="metadata3023">
                    <rdf:RDF>
                      <cc:Work rdf:about="">
                        <dc:format>image/svg+xml</dc:format>
                        <dc:type
                          rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                      </cc:Work>
                    </rdf:RDF>
                  </metadata>
                  <defs id="defs3021" />
                  <sodipodi:namedview
                    pagecolor="#ffffff"
                    bordercolor="#666666"
                    borderopacity="1"
                    objecttolerance="10"
                    gridtolerance="10"
                    guidetolerance="10"
                    inkscape:pageopacity="0"
                    inkscape:pageshadow="2"
                    inkscape:window-width="640"
                    inkscape:window-height="480"
                    id="namedview3019"
                    showgrid="false"
                    inkscape:zoom="0.13169643"
                    inkscape:cx="896"
                    inkscape:cy="896"
                    inkscape:window-x="0"
                    inkscape:window-y="25"
                    inkscape:window-maximized="0"
                    inkscape:current-layer="svg3013" />
                  <g
                    transform="matrix(1,0,0,-1,159.45763,1293.0169)"
                    id="g3015">
                    <path
                      d="m 1408,296 q 0,-27 -10,-70.5 Q 1388,182 1377,157
                      1356,107 1255,51 1161,0 1069,0 1042,0 1016.5,3.5 991,7
                      959,16 927,25 911.5,30.5 896,36 856,51 816,66 807,69
                      709,104 632,152 504,231 367.5,367.5 231,504 152,632
                      104,709 69,807 66,816 51,856 36,896 30.5,911.5 25,927
                      16,959 7,991 3.5,1016.5 0,1042 0,1069 q 0,92 51,186 56,101
                      106,122 25,11 68.5,21 43.5,10 70.5,10 14,0 21,-3 18,-6
                      53,-76 11,-19 30,-54 19,-35 35,-63.5 16,-28.5 31,-53.5
                      3,-4 17.5,-25 14.5,-21 21.5,-35.5 7,-14.5 7,-28.5 0,-20
                      -28.5,-50 -28.5,-30 -62,-55 -33.5,-25 -62,-53 -28.5,-28
                      -28.5,-46 0,-9 5,-22.5 5,-13.5 8.5,-20.5 3.5,-7 14,-24
                      10.5,-17 11.5,-19 76,-137 174,-235 98,-98 235,-174 2,-1
                      19,-11.5 17,-10.5 24,-14 7,-3.5 20.5,-8.5 13.5,-5 22.5,-5
                      18,0 46,28.5 28,28.5 53,62 25,33.5 55,62 30,28.5 50,28.5
                      14,0 28.5,-7 14.5,-7 35.5,-21.5 21,-14.5 25,-17.5 25,-15
                      53.5,-31 28.5,-16 63.5,-35 35,-19 54,-30 70,-35 76,-53
                      3,-7 3,-21 z"
                      id="path3017"
                      inkscape:connector-curvature="0"
                      style="fill:currentColor" />
                  </g>
                </svg>
              </div>
            </div>
            <!-- <img
              src={image2}
              alt=""
              width="70px"
              height="70px" -->
            <!-- class="rounded-full mr-5 border border-gray-800 p-1 bg-gray-800" /> -->
          </div>
        {/each}
      </div>
    </div>

    <div class="mb-6">
      <textarea
        class="shadow appearance-none border border-gray-500 rounded w-full py-2
        px-3 text-gray-700 mb-3 leading-tight focus:outline-none
        focus:shadow-outline"
        type="text"
        onfocus="this.value=''"
        bind:value={messageText} />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
        rounded w-full focus:outline-none focus:shadow-outline"
        type="button"
        on:click={addMessage}>
        Send message
      </button>

    </div>
  </form>

</div>
