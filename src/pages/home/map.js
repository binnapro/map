import React, { Component } from "react";
import MyModal from "./modal.js";
import { api, post } from "../utils/request.js";
const config = [
  {
    visible: true,
    which: 1,
    top: -82,
    left: 285,
    type: "right",
    lineTop: 22,
    lineLeft: 190
  },
  {
    visible: true,
    which: 2,
    top: -69,
    left: 22,
    type: "left",
    lineTop: 46,
    lineLeft: 242
  },
  {
    visible: true,
    which: 3,
    top: -69,
    left: 279,
    type: "left",
    lineTop: 20,
    lineLeft: 498
  },
  {
    visible: true,
    which: 4,
    top: -138,
    left: 323,
    type: "left",
    lineTop: -28,
    lineLeft: 543
  },
  {
    visible: true,
    which: 5,
    top: -125,
    left: 175,
    type: "left",
    lineTop: 129,
    lineLeft: 394
  }
];

export default class App extends Component {
  state = {
    which: 0,
    top: 0,
    visible: false,
    left: 0,
    type: "left",
    lineTop: 0,
    lineLeft: 0,
    source: []
  };

  componentDidMount() {}
  init = () => {
    post(api.maplist, {
      page: this.props.step,
      area: this.state.which
    }).then(e => {
      let res = e.data;
      if (res.status === "success") {
        this.setState({
          source: res.data
        });
      }
    });
  };
  mapClick = ({ which }, e) => {
    let a = config[which - 1];
    this.setState(
      {
        ...a
      },
      () => {
        this.init();
      }
    );
  };
  update = e => {
    this.setState(e);
  };
  render() {
    let { which } = this.state;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{ width: 680, height: 424, zIndex: 10 }}
          className="relative"
        >
          <div
            style={{
              position: "absolute",
              zIndex: 9,
              width: "100%",
              height: "100%"
            }}
          >
            <div
              style={{ top: -2, left: 0 }}
              className={
                which == 1
                  ? "absolute select default"
                  : which === 0
                    ? "absolute default"
                    : " absolute default noselect"
              }
            >
              <img
                src={
                  "http://cdn.muyucloud.com/applan_teacher_map1/" +
                  this.props.step +
                  "-" +
                  "1.png"
                }
                width="279px"
              />
            </div>
            <div
              style={{ top: 34, left: 253 }}
              className={
                which == 2
                  ? "absolute select default"
                  : which === 0
                    ? "absolute default"
                    : " absolute default noselect"
              }
            >
              <img
                src={
                  "http://cdn.muyucloud.com/applan_teacher_map1/" +
                  this.props.step +
                  "-" +
                  "2.png"
                }
                width="293px"
              />
            </div>

            <div
              style={{ top: 81, right: 34 }}
              className={
                which == 3
                  ? "absolute select default"
                  : which === 0
                    ? "absolute default"
                    : " absolute default noselect"
              }
            >
              <img
                src={
                  "http://cdn.muyucloud.com/applan_teacher_map1/" +
                  this.props.step +
                  "-" +
                  "3.png"
                }
                width="104px"
              />
            </div>
            <div
              style={{ top: 34, right: 0 }}
              className={
                which == 4
                  ? "absolute select default"
                  : which === 0
                    ? "absolute default"
                    : " absolute default noselect"
              }
            >
              <img
                src={
                  "http://cdn.muyucloud.com/applan_teacher_map1/" +
                  this.props.step +
                  "-" +
                  "4.png"
                }
                width="70px"
              />
            </div>
            <div
              style={{ bottom: -5, right: 60 }}
              className={
                which == 5
                  ? "absolute select default"
                  : which === 0
                    ? "absolute default"
                    : " absolute default noselect"
              }
            >
              <img
                src={
                  "http://cdn.muyucloud.com/applan_teacher_map1/" +
                  this.props.step +
                  "-" +
                  "5.png"
                }
                width="416px"
              />
            </div>
          </div>
          <img
            src="http://cdn.muyucloud.com/applan_teacher_map/transparent.png"
            width="100%"
            height="100%"
            useMap="#planetmap"
            style={{ position: "absolute", zIndex: 999999 }}
          />
          <map name="planetmap" id="planetmap">
            <area
              shape="poly"
              style={{ outline: "none" }}
              coords="37,4,35,13,35,20,36,26,40,29,38,31,38,35,36,40,35,45,30,53,29,59,28,63,25,69,23,73,22,77,19,82,16,88,15,92,10,105,13,111,8,117,8,123,6,127,2,131,1,137,4,143,4,149,5,155,2,159,4,162,8,169,8,174,10,181,10,188,11,195,13,200,14,207,16,217,18,222,20,228,21,234,23,240,28,244,32,248,38,252,44,255,48,259,52,262,56,266,61,274,61,281,63,285,75,284,80,287,86,287,93,287,92,291,97,293,100,296,106,297,110,301,116,306,120,308,125,311,131,314,136,315,147,319,155,321,161,322,166,323,173,324,178,324,182,324,182,319,182,317,188,318,195,319,202,319,205,317,212,318,221,319,230,318,236,321,243,320,251,321,254,317,254,305,255,291,256,281,256,272,257,264,258,255,258,243,260,239,263,239,268,238,272,237,272,231,272,223,273,216,273,211,274,206,273,200,273,195,274,190,275,188,275,183,276,177,276,173,267,173,257,171,254,168,253,160,254,152,254,141,255,135,255,128,255,121,257,114,257,108,257,103,257,96,257,91,258,86,258,78,258,72,259,65,260,58,260,48,260,41,250,39,237,38,227,36,216,35,204,33,193,32,182,31,175,29,156,27,148,25,139,24,129,23,123,20,115,18,105,15,91,13,78,8,74,6,66,3,61,2,61,8,62,12,63,17,63,21,60,24,58,27,57,23,57,19,55,15,50,12,42,7"
              href="#"
              onClick={e => this.mapClick({ which: 1 }, e)}
            />
            <area
              shape="poly"
              style={{ outline: "none" }}
              coords="263,40,263,45,262,50,262,55,262,61,263,66,262,68,261,71,262,77,261,82,260,87,260,94,259,100,259,107,257,112,257,116,257,119,258,122,258,125,256,130,256,135,256,139,255,144,255,148,254,152,254,156,254,163,256,166,256,168,262,169,269,170,275,171,278,174,278,179,278,184,277,188,275,194,276,200,276,206,276,211,275,218,275,223,274,230,274,234,273,238,269,239,266,239,261,239,261,243,263,246,268,247,277,247,282,248,288,247,295,248,299,249,299,253,298,257,299,262,298,266,298,271,299,276,300,280,305,283,312,285,319,286,324,288,327,291,329,293,332,290,335,291,337,293,340,292,344,293,349,293,354,292,357,292,362,291,368,292,372,294,373,288,372,281,371,276,370,270,371,264,369,254,369,249,369,247,376,246,382,246,387,246,392,247,397,245,402,246,407,246,413,246,421,246,427,245,431,247,429,251,428,253,433,253,438,250,437,245,440,239,440,235,443,233,446,233,450,231,449,228,454,226,455,221,458,219,461,218,465,219,468,217,471,215,473,216,478,214,482,212,486,207,489,203,493,198,494,194,498,196,502,198,506,200,511,202,513,199,517,198,522,200,523,202,526,200,526,195,527,191,531,191,533,186,537,183,541,181,542,176,542,171,542,166,542,161,542,155,540,150,539,145,536,144,533,146,528,150,525,152,520,155,519,156,514,156,512,153,508,151,506,149,508,145,509,142,511,138,514,134,514,128,514,125,513,121,512,116,509,111,506,108,503,112,501,109,501,105,501,99,500,96,500,93,498,89,494,83,494,81,493,80,489,80,487,77,485,76,480,76,477,74,476,72,475,71,469,74,467,74,461,76,458,79,453,78,448,76,446,73,442,72,437,72,438,71,442,67,444,64,443,62,438,64,433,67,431,70,429,72,424,75,420,78,418,78,417,78,415,77,412,75,409,74,406,75,401,77,397,76,399,73,404,69,407,67,411,64,414,61,420,59,423,56,419,55,416,53,411,52,405,55,402,54,398,53,396,51,392,52,390,50,387,47,381,47,378,48,371,46,366,46,366,41,365,36,361,35,360,37,358,41,354,41,350,41,345,42,340,41,328,41,322,41,317,40,311,40,305,40,299,40,293,39,286,40,281,39,274,38,269,38,264,37"
              href="#"
              onClick={e => this.mapClick({ which: 2 }, e)}
            />
            <area
              shape="poly"
              style={{ outline: "none" }}
              coords="542,143,546,141,549,138,554,134,556,130,556,127,555,124,556,120,562,118,570,117,576,116,583,114,584,110,583,106,581,103,584,100,587,97,590,92,592,89,594,86,600,84,605,82,609,81,611,85,611,89,613,93,613,98,614,102,616,107,618,110,619,115,620,119,620,125,620,131,622,137,623,141,625,143,627,139,631,137,637,135,642,135,643,134,639,138,636,142,632,147,629,151,627,155,625,159,623,164,621,170,619,174,617,176,620,177,620,182,620,185,620,188,617,194,615,199,612,203,607,203,607,198,606,196,605,191,604,192,601,193,598,193,593,192,590,190,589,186,590,183,587,180,584,178,580,175,575,174,570,177,564,179,563,181,562,183,560,177,558,176,554,176,548,177,547,172,546,166,546,160,544,155,544,149,542,145"
              href="#"
              onClick={e => this.mapClick({ which: 3 }, e)}
            />
            <area
              shape="poly"
              style={{ outline: "none" }}
              coords="613,82,617,81,622,79,626,78,629,78,630,82,632,87,633,82,632,78,631,73,632,73,636,69,638,67,638,62,638,57,638,53,639,49,640,43,641,39,644,36,648,35,649,36,654,35,658,37,661,39,663,44,662,46,663,51,666,54,667,57,670,59,671,60,673,62,675,62,679,67,677,69,675,71,672,75,669,77,667,77,663,79,661,81,661,85,658,87,653,91,650,95,649,99,647,105,648,108,648,113,650,115,653,119,656,121,658,120,660,118,660,121,660,124,657,125,653,125,651,126,645,130,644,133,640,132,636,133,632,135,629,136,626,138,625,140,623,134,622,130,622,125,621,120,621,115,620,110,619,107,617,103,616,101,615,96,614,92,614,87,613,85,612,83"
              href="#"
              onClick={e => this.mapClick({ which: 4 }, e)}
            />
            <area
              shape="poly"
              style={{ outline: "none" }}
              coords="207,316,211,317,216,317,223,317,228,317,232,318,236,319,241,319,245,319,251,319,257,320,256,316,257,312,256,306,257,300,259,295,259,290,259,286,260,282,260,278,260,274,260,270,262,265,261,259,261,254,262,249,262,248,266,247,270,248,277,249,281,248,289,248,292,249,297,250,298,253,298,259,298,263,297,267,298,273,298,278,300,282,305,284,312,286,318,287,324,290,327,293,332,293,333,292,337,294,341,294,347,294,354,293,366,293,372,292,373,286,374,282,374,279,373,276,373,271,374,267,373,263,372,258,371,253,371,249,376,249,382,249,386,248,391,248,396,249,403,249,408,249,411,249,415,249,417,249,422,248,426,248,430,248,428,251,427,254,431,255,434,255,436,254,438,252,440,249,440,245,441,242,444,236,447,235,451,234,452,231,455,228,457,226,458,224,459,221,465,221,470,221,474,220,479,218,482,216,484,214,486,212,489,209,491,207,493,204,494,200,495,198,502,199,504,201,508,203,511,204,514,202,516,202,523,203,526,203,529,202,528,199,530,194,532,194,533,190,536,188,540,187,542,183,543,179,543,176,543,174,543,171,544,166,545,168,546,174,547,179,548,179,553,178,556,179,560,180,562,184,566,183,567,180,572,179,575,177,580,177,581,179,584,182,587,184,590,184,588,186,589,191,591,194,595,195,599,197,603,198,606,201,607,205,606,208,606,210,607,211,605,214,610,215,613,215,614,219,614,221,616,224,613,226,608,229,608,231,614,229,616,230,618,230,618,235,618,239,611,240,611,244,613,246,615,247,612,251,606,252,602,255,601,259,598,263,596,267,592,270,586,271,584,276,582,279,581,283,580,286,575,289,571,293,567,297,564,303,560,307,559,312,557,317,557,324,557,329,558,333,561,337,562,342,564,347,567,351,572,353,574,356,576,360,578,365,578,369,580,373,582,378,584,381,587,385,588,390,589,394,588,397,589,400,589,403,588,405,590,410,587,413,583,414,579,415,573,411,572,408,568,406,564,404,563,400,562,397,560,393,557,390,553,391,549,385,548,382,550,379,550,376,545,378,544,376,544,373,545,370,545,365,544,360,541,358,536,356,533,356,528,358,524,359,519,359,512,356,511,354,505,352,503,347,501,345,498,343,493,345,491,343,489,341,488,341,483,342,479,342,477,343,475,342,474,343,473,345,471,345,467,344,467,343,464,345,462,345,460,344,457,345,453,347,450,349,450,352,447,357,446,359,450,363,454,366,454,368,450,368,446,368,443,365,439,362,439,365,437,367,435,367,432,366,429,367,426,366,421,364,419,361,416,359,413,358,409,357,409,359,407,361,403,361,400,360,397,360,392,359,388,359,385,359,381,361,379,362,377,362,374,363,372,363,370,361,367,360,367,364,368,368,367,370,363,372,359,375,356,377,350,379,347,381,345,384,343,385,339,386,338,389,336,392,335,395,333,399,331,403,331,408,333,412,334,416,332,415,333,418,330,420,329,421,325,420,321,418,316,417,314,415,310,413,306,411,304,408,302,403,302,398,300,394,298,391,294,388,291,383,289,379,287,375,284,371,282,368,280,365,277,361,272,360,268,357,261,356,257,358,256,360,255,364,252,368,249,369,245,368,241,365,239,362,236,359,233,357,231,355,230,351,229,347,229,344,226,340,224,337,222,335,216,331,213,327,209,324,206,320,204,318"
              href="#"
              onClick={e => this.mapClick({ which: 5 }, e)}
            />
          </map>
        </div>
        <MyModal
          update={this.update}
          visible={this.state.visible}
          top={this.state.top}
          left={this.state.left}
          lineTop={this.state.lineTop}
          lineLeft={this.state.lineLeft}
          type={this.state.type}
          step={this.props.step}
          which={this.state.which}
          source={this.state.source}
        />
      </div>
    );
  }
}