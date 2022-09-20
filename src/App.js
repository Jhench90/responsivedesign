import logo from './logo.svg';
import './App.css';
import Component1 from './comp/Component1'
import Component2 from './comp/Component2'

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: '50px' }}>
        <h4 style={{ margin: 'auto' }}>Responsive divs using width: '400px', display: 'inline-block'</h4>
        <Component1 />
        <Component2 />
        <Component1 />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h4 style={{ margin: 'auto' }}>Divs using Grid Layout</h4>
        <div> gridContainer has display: grid; grid-template-columns: auto auto auto; </div>
        <div> gridItems have border: 1px solid black;</div>
        <div className='gridContainer'>
          <div className="gridItem">Grid Item1</div>
          <div className="gridItem">Grid Item2</div>
          <div className="gridItem">Grid Item3</div>
          <div className="gridItem">Grid Item4</div>
          <div className="gridItem">Grid Item5</div>
          <div className="gridItem">Grid Item6</div>
          <div className="gridItem">Grid Item7</div>
          <div className="gridItem">Grid Item8</div>
          <div className="gridItem">Grid Item9</div>
        </div>
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h4 style={{ maxWidth: '820px', margin: 'auto' }}>Divs using Flexbox layout</h4>
        <div>flexContainer display: flex; flex-direction: row; flex-wrap: wrap;</div>
        <div className="flexContainer">
          <div style={{ margin: '50px', padding: '25px', border: 'solid black 1px' }}>1</div>
          <div style={{ margin: '50px', padding: '25px', border: 'solid black 1px' }}>2</div>
          <div style={{ margin: '50px', padding: '25px', border: 'solid black 1px' }}>3</div>
          <div style={{ margin: '50px', padding: '25px', border: 'solid black 1px' }}>4</div>
          <div style={{ margin: '50px', padding: '25px', border: 'solid black 1px' }}>5</div>
          <div style={{ margin: '50px', padding: '25px', border: 'solid black 1px' }}>6</div>
          <div style={{ margin: '50px', padding: '25px', border: 'solid black 1px' }}>7</div>
          <div style={{ margin: '50px', padding: '25px', border: 'solid black 1px' }}>8</div>
          <div style={{ margin: '50px', padding: '25px', border: 'solid black 1px' }}>9</div>
          <div style={{ margin: '50px', padding: '25px', border: 'solid black 1px' }}>10</div>
        </div>
      </div>
      <div>
        <h4>Sample App Layout Using Grid</h4>
        <div className="row">
          <div className="col-1">Button1</div>
          <div className="col-1">Button2</div>
          <div className="col-4">Search Bar</div>
          <div className="col-1">Button3</div>
          <div className="col-1">Button4</div>
          <div className="col-2">Connect?</div>
          <div className="col-2">Support</div>
        </div>
        <div className="row">
          <div className="col-2">Navigation Buttons
            <div><button>Uno</button></div>
            <div><button>Dos</button></div>
            <div><button>Tres</button></div>
            <div><button>Quantro</button></div>
            <div><button>Qinco</button></div>
            <div><button>Ces</button></div>
            <div><button>Uno</button></div>
            <div><button>Dos</button></div>
            <div><button>Tres</button></div>
            <div><button>Quantro</button></div>
            <div><button>Qinco</button></div>
            <div><button>Ces</button></div>

          </div>
          <div className="col-8">
            <div> * &#123;
              box-sizing: border-box;
              &#125;</div>

            <div>
              .col-1 &#123; width: 8.33%; &#125;
              .col-2 &#123; width: 16.66%; &#125;
              .col-3 &#123; width: 25%; &#125;
              .col-4 &#123; width: 33.33%; &#125;
              .col-5 &#123; width: 41.66%; &#125;
              .col-6 &#123; width: 50%; &#125;
              .col-7 &#123; width: 58.33%; &#125;
              .col-8 &#123; width: 66.66%; &#125;
              .col-9 &#123; width: 75%; &#125;
              .col-10 &#123; width: 83.33%; &#125;
              .col-11 &#123; width: 91.66%; &#125;
              .col-12 &#123; width: 100%; &#125;
            </div>
            <div>
              [class*="col-"] &#123;
              float: left;
              padding: 15px;
              border: 1px solid red;
              &#125;
            </div>

            <div>
              .row::after &#123;
              content: "";
              clear: both;
              display: table;
              &#125;
            </div>

            John Muir (/mjʊər/ MURE; April 21, 1838 – December 24, 1914),[1] also known as "John of the Mountains" and "Father of the National Parks",[2][3] was an influential Scottish-American[4][5]: 42  naturalist, author, environmental philosopher, botanist, zoologist, glaciologist, and early advocate for the preservation of wilderness in the United States of America.

            His letters, essays, and books describing his adventures in nature, especially in the Sierra Nevada, have been read by millions. His activism helped to preserve the Yosemite Valley and Sequoia National Park, and his example has served as an inspiration for the preservation of many other wilderness areas. The Sierra Club, which he co-founded, is a prominent American conservation organization. In his later life, Muir devoted most of his time to the preservation of the Western forests. As part of the campaign to make Yosemite a national park, Muir published two landmark articles on wilderness preservation in The Century Magazine, "The Treasures of the Yosemite" and "Features of the Proposed Yosemite National Park"; this helped support the push for U.S. Congress to pass a bill in 1890 establishing Yosemite National Park.[6] The spiritual quality and enthusiasm toward nature expressed in his writings has inspired readers, including presidents and congressmen, to take action to help preserve large nature areas.[7]

            John Muir has been considered "an inspiration to both Scots and Americans".[8] Muir's biographer, Steven J. Holmes, believes that Muir has become "one of the patron saints of twentieth-century American environmental activity", both political and recreational. As a result, his writings are commonly discussed in books and journals, and he has often been quoted by nature photographers such as Ansel Adams.[9] "Muir has profoundly shaped the very categories through which Americans understand and envision their relationships with the natural world", writes Holmes.[10]

            Muir was noted for being an ecological thinker, political spokesman, and religious prophet, whose writings became a personal guide into nature for many people, making his name "almost ubiquitous" in the modern environmental consciousness. According to author William Anderson, Muir exemplified "the archetype of our oneness with the earth",[11] while biographer Donald Worster says he believed his mission was "saving the American soul from total surrender to materialism".[12]: 403  On April 21, 2013, the first John Muir Day was celebrated in Scotland, which marked the 175th anniversary of his birth, paying homage to the conservationist.</div>
          <div className="col-2">Right Side Area</div>
        </div>
        <div className='row'>
          <div className="col-12">Foot Content Here, All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default App;
