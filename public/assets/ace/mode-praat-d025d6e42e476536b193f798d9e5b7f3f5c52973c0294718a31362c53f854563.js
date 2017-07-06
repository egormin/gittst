define("ace/mode/praat_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,o=function(){var e="if|then|else|elsif|elif|endif|fi|endfor|endproc|while|endwhile|repeat|until|select|plus|minus|assert|asserterror",t="macintosh|windows|unix|praatVersion|praatVersion\\$pi|undefined|newline\\$|tab\\$|shellDirectory\\$|homeDirectory\\$|preferencesDirectory\\$|temporaryDirectory\\$|defaultDirectory\\$",n="clearinfo|endSendPraat",r="writeInfo|writeInfoLine|appendInfo|appendInfoLine|info\\$|writeFile|writeFileLine|appendFile|appendFileLine|abs|round|floor|ceiling|min|max|imin|imax|sqrt|sin|cos|tan|arcsin|arccos|arctan|arctan2|sinc|sincpi|exp|ln|lnBeta|lnGamma|log10|log2|sinh|cosh|tanh|arcsinh|arccosh|arctanh|sigmoid|invSigmoid|erf|erfc|random(?:Uniform|Integer|Gauss|Poisson|Binomial)|gaussP|gaussQ|invGaussQ|incompleteGammaP|incompleteBeta|chiSquareP|chiSquareQ|invChiSquareQ|studentP|studentQ|invStudentQ|fisherP|fisherQ|invFisherQ|binomialP|binomialQ|invBinomialP|invBinomialQ|hertzToBark|barkToHerz|hertzToMel|melToHertz|hertzToSemitones|semitonesToHerz|erb|hertzToErb|erbToHertz|phonToDifferenceLimens|differenceLimensToPhon|soundPressureToPhon|beta|beta2|besselI|besselK|numberOfColumns|numberOfRows|selected|selected\\$|numberOfSelected|variableExists|index|rindex|startsWith|endsWith|index_regex|rindex_regex|replace_regex\\$|length|extractWord\\$|extractLine\\$|extractNumber|left\\$|right\\$|mid\\$|replace\\$|date\\$|fixed\\$|percent\\$|zero#|linear#|randomUniform#|randomInteger#|randomGauss#|beginPause|endPause|demoShow|demoWindowTitle|demoInput|demoWaitForInput|demoClicked|demoClickedIn|demoX|demoY|demoKeyPressed|demoKey\\$|demoExtraControlKeyPressed|demoShiftKeyPressed|demoCommandKeyPressed|demoOptionKeyPressed|environment\\$|chooseReadFile\\$|chooseDirectory\\$|createDirectory|fileReadable|deleteFile|selectObject|removeObject|plusObject|minusObject|runScript|exitScript|beginSendPraat|endSendPraat|objectsAreIdentical",i="Activation|AffineTransform|AmplitudeTier|Art|Artword|Autosegment|BarkFilter|CCA|Categories|Cepstrum|Cepstrumc|ChebyshevSeries|ClassificationTable|Cochleagram|Collection|Configuration|Confusion|ContingencyTable|Corpus|Correlation|Covariance|CrossCorrelationTable|CrossCorrelationTables|DTW|Diagonalizer|Discriminant|Dissimilarity|Distance|Distributions|DurationTier|EEG|ERP|ERPTier|Eigen|Excitation|Excitations|ExperimentMFC|FFNet|FeatureWeights|Formant|FormantFilter|FormantGrid|FormantPoint|FormantTier|GaussianMixture|HMM|HMM_Observation|HMM_ObservationSequence|HMM_State|HMM_StateSequence|Harmonicity|ISpline|Index|Intensity|IntensityTier|IntervalTier|KNN|KlattGrid|KlattTable|LFCC|LPC|Label|LegendreSeries|LinearRegression|LogisticRegression|LongSound|Ltas|MFCC|MSpline|ManPages|Manipulation|Matrix|MelFilter|MixingMatrix|Movie|Network|OTGrammar|OTHistory|OTMulti|PCA|PairDistribution|ParamCurve|Pattern|Permutation|Pitch|PitchTier|PointProcess|Polygon|Polynomial|Procrustes|RealPoint|RealTier|ResultsMFC|Roots|SPINET|SSCP|SVD|Salience|ScalarProduct|Similarity|SimpleString|SortedSetOfString|Sound|Speaker|Spectrogram|Spectrum|SpectrumTier|SpeechSynthesizer|SpellingChecker|Strings|StringsIndex|Table|TableOfReal|TextGrid|TextInterval|TextPoint|TextTier|Tier|Transition|VocalTract|Weight|WordList";this.$rules={start:[{token:"string.interpolated",regex:/'((?:[a-z][a-zA-Z0-9_]*)(?:\$|#|:[0-9]+)?)'/},{token:["text","text","keyword.operator","text","keyword"],regex:/(^\s*)(?:([a-z][a-zA-Z0-9_]*\$?\s+)(=)(\s+))?(stopwatch)/},{token:["text","keyword","text","string"],regex:/(^\s*)(print(?:line|tab)?|echo|exit|pause|send(?:praat|socket)|include|execute|system(?:_nocheck)?)(\s+)(.*)/},{token:["text","keyword"],regex:"(^\\s*)("+n+")$"},{token:["text","keyword.operator","text"],regex:/(\s+)((?:\+|-|\/|\*|<|>)=?|==?|!=|%|\^|\||and|or|not)(\s+)/},{token:["text","text","keyword.operator","text","keyword","text","keyword"],regex:/(^\s*)(?:([a-z][a-zA-Z0-9_]*\$?\s+)(=)(\s+))?(?:((?:no)?warn|(?:unix_)?nocheck|noprogress)(\s+))?((?:[A-Z][^.:"]+)(?:$|(?:\.{3}|:)))/},{token:["text","keyword","text","keyword"],regex:/(^\s*)(?:(demo)?(\s+))((?:[A-Z][^.:"]+)(?:$|(?:\.{3}|:)))/},{token:["text","keyword","text","keyword"],regex:/^(\s*)(?:(demo)(\s+))?(10|12|14|16|24)$/},{token:["text","support.function","text"],regex:/(\s*)(do\$?)(\s*:\s*|\s*\(\s*)/},{token:"entity.name.type",regex:"("+i+")"},{token:"variable.language",regex:"("+t+")"},{token:["support.function","text"],regex:"((?:"+r+")\\$?)(\\s*(?::|\\())"},{token:"keyword",regex:/(\bfor\b)/,next:"for"},{token:"keyword",regex:"(\\b(?:"+e+")\\b)"},{token:"string",regex:/"[^"]*"/},{token:"string",regex:/"[^"]*$/,next:"brokenstring"},{token:["text","keyword","text","entity.name.section"],regex:/(^\s*)(\bform\b)(\s+)(.*)/,next:"form"},{token:"constant.numeric",regex:/\b[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/},{token:["keyword","text","entity.name.function"],regex:/(procedure)(\s+)(\S+)/},{token:["entity.name.function","text"],regex:/(@\S+)(:|\s*\()/},{token:["text","keyword","text","entity.name.function"],regex:/(^\s*)(call)(\s+)(\S+)/},{token:"comment",regex:/(^\s*#|;).*$/},{token:"text",regex:/\s+/}],form:[{token:["keyword","text","constant.numeric"],regex:/((?:optionmenu|choice)\s+)(\S+:\s+)([0-9]+)/},{token:["keyword","constant.numeric"],regex:/((?:option|button)\s+)([+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b)/},{token:["keyword","string"],regex:/((?:option|button)\s+)(.*)/},{token:["keyword","text","string"],regex:/((?:sentence|text)\s+)(\S+\s*)(.*)/},{token:["keyword","text","string","invalid.illegal"],regex:/(word\s+)(\S+\s*)(\S+)?(\s.*)?/},{token:["keyword","text","constant.language"],regex:/(boolean\s+)(\S+\s*)(0|1|"?(?:yes|no)"?)/},{token:["keyword","text","constant.numeric"],regex:/((?:real|natural|positive|integer)\s+)(\S+\s*)([+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b)/},{token:["keyword","string"],regex:/(comment\s+)(.*)/},{token:"keyword",regex:"endform",next:"start"}],"for":[{token:["keyword","text","constant.numeric","text"],regex:/(from|to)(\s+)([+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?)(\s*)/},{token:["keyword","text"],regex:/(from|to)(\s+\S+\s*)/},{token:"text",regex:/$/,next:"start"}],brokenstring:[{token:["text","string"],regex:/(\s*\.{3})([^"]*)/},{token:"string",regex:/"/,next:"start"}]}};r.inherits(o,i),t.PraatHighlightRules=o}),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("../range").Range,i=function(){};(function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var n=e.getLine(t),i=n.match(/^(\s*\})/);if(!i)return 0;var o=i[1].length,s=e.findMatchingBracket({row:t,column:o});if(!s||s.row==t)return 0;var a=this.$getIndent(e.getLine(s.row));e.replace(new r(t,0,t,o-1),a)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i}),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../../range").Range,o=e("./fold_mode").FoldMode,s=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(s,o),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var o=i.match(this.foldingStartMarker);if(o){var s=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,s);var a=e.getCommentFoldRange(n,s+o[0].length,1);return a&&!a.isMultiLine()&&(r?a=this.getSectionRange(e,n):"all"!=t&&(a=null)),a}if("markbegin"!==t){var o=i.match(this.foldingStopMarker);if(o){var s=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],n,s):e.getCommentFoldRange(n,s,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),o=t,s=n.length;t+=1;for(var a=t,d=e.getLength();++t<d;){n=e.getLine(t);var l=n.search(/\S/);if(-1!==l){if(r>l)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=o)break;if(c.isMultiLine())t=c.end.row;else if(r==l)break}a=t}}return new i(o,s,a,e.getLine(a).length)},this.getCommentRegionBlock=function(e,t,n){for(var r=t.search(/\s*$/),o=e.getLength(),s=n,a=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,d=1;++n<o;){t=e.getLine(n);var l=a.exec(t);if(l&&(l[1]?d--:d++,!d))break}var c=n;return c>s?new i(s,r,c,t.length):void 0}}.call(s.prototype)}),define("ace/mode/praat",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/praat_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,o=e("./praat_highlight_rules").PraatHighlightRules,s=e("./matching_brace_outdent").MatchingBraceOutdent,a=e("./folding/cstyle").FoldMode,d=function(){this.HighlightRules=o,this.$outdent=new s,this.foldingRules=new a,this.$behaviour=this.$defaultBehaviour};r.inherits(d,i),function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e),o=i.tokens;if(o.length&&"comment"==o[o.length-1].type)return r;if("start"==e){var s=t.match(/^.*[\{\(\[:]\s*$/);s&&(r+=n)}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/praat"}.call(d.prototype),t.Mode=d});