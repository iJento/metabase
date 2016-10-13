import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";

export default class AuthScene extends Component {
    componentDidMount() {
        // HACK: React 0.14 doesn't support "fill-rule" attribute. We can remove this when upgrading to React 0.15.
        ReactDOM.findDOMNode(this.refs.HACK_fill_rule_1).setAttribute("fill-rule", "evenodd");
        ReactDOM.findDOMNode(this.refs.HACK_fill_rule_2).setAttribute("fill-rule", "evenodd");
    }

    render() {
        return (
            <section className="z1 brand-scene absolute bottom left right hide sm-show">
                <div className="brand-boat-container">
                    <svg className="brand-boat" width="27px" height="28px" viewBox="0 0 27 28">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" ref="HACK_fill_rule_1">
                            <g transform="translate(-52.000000, -49.000000)" fill="#fff">
                                <path d="M56.9966734,62.0821591 C56.9548869,62.5960122 56.5246217,63 56,63 C55.4477153,63 55,62.5522847 55,62 C55,61.4477153 55.4477153,61 56,61 C56.1542427,61 56.3003292,61.0349209 56.4307846,61.0972878 C56.4365546,60.9708421 56.4672874,60.8469847 56.5249064,60.738086 L60.591292,53.0527085 C60.6128147,53.0120312 60.6340855,52.9741034 60.6550548,52.9389125 C60.2727349,52.7984089 60,52.4310548 60,52 C60,51.4477153 60.4477153,51 61,51 C61.5522847,51 62,51.4477153 62,52 C62,52.4778316 61.6648606,52.8773872 61.2168176,52.9764309 C61.2239494,53.0443316 61.2276783,53.1212219 61.2276783,53.2070193 L61.2276783,64.6460667 C61.2276783,64.7905295 61.2109404,64.9142428 61.1799392,65.0161455 C61.6463447,65.1008929 62,65.5091461 62,66 C62,66.5522847 61.5522847,67 61,67 C60.4477153,67 60,66.5522847 60,66 C60,65.6775356 60.1526298,65.3907197 60.3895873,65.2078547 C60.3353792,65.1698515 60.2797019,65.1246206 60.2229246,65.0720038 L56.9966734,62.0821591 Z M66.1768361,51.0536808 L76.3863147,62.9621534 C76.6248381,62.7575589 76.9348843,62.6339439 77.2738087,62.6339439 C78.0269541,62.6339439 78.6374991,63.2443563 78.6374991,63.9973383 C78.6374991,64.7503202 78.0269541,65.3607327 77.2738087,65.3607327 C76.7179077,65.3607327 76.2396954,65.0281798 76.0273418,64.5512033 L76.0273418,64.5512033 L66.2470617,68.8970508 L66.2470617,68.8970508 C66.3224088,69.0662913 66.3642852,69.2537142 66.3642852,69.4509158 C66.3642852,70.2038977 65.7537402,70.8143102 65.0005948,70.8143102 C64.2474494,70.8143102 63.6369043,70.2038977 63.6369043,69.4509158 C63.6369043,68.6979339 64.2474494,68.0875214 65.0005948,68.0875214 L65.0005948,51.7267888 C64.2474494,51.7267888 63.6369043,51.1163763 63.6369043,50.3633944 C63.6369043,49.6104125 64.2474494,49 65.0005948,49 C65.7537402,49 66.3642852,49.6104125 66.3642852,50.3633944 C66.3642852,50.6152816 66.2959632,50.8512148 66.1768361,51.0536808 L66.1768361,51.0536808 Z M74.9589487,72 C76.0592735,72 76.2934239,72.6072543 75.4783436,73.3596586 L73.4702868,75.2133052 C72.656816,75.9642239 71.1011127,76.5729638 69.999426,76.5729638 L57.9641665,76.5729638 C56.8607339,76.5729638 55.3083859,75.9657095 54.4933056,75.2133052 L52.4852488,73.3596586 C51.6717779,72.6087399 51.9052063,72 53.0046438,72 L74.9589487,72 Z" id="boat" ></path>
                            </g>
                        </g>
                    </svg>
                </div>

                <div className="brand-illustration">
                
                    <div className="brand-mountain-1">

                        <svg width="514px" height="175px" viewBox="0 0 514 175" version="1.1">

                        </svg>

                    </div>
                    

                    <div className="brand-bridge">

                        <svg width="683px" height="154px" viewBox="0 0 683 154" version="1.1">
                            
                        </svg>

                    </div>
                    <div className="brand-mountain-2">

                        <svg width="514px" height="175px" viewBox="0 0 514 175" version="1.1">
                        </svg>

                    </div>
                </div>
                <div className="bg-brand block py3 absolute bottom left right"></div>
            </section>
        );
    }
}
