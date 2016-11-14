//Codes by Jasper in colaboration with the Andela Nairaland Group   

var w=window;
    var Jasync=function(){
        this.xhr=xhr=new XMLHttpRequest();
        this.readyStateCodes={
        }

            var browser= function() {
            if (browser.prototype._cachedResult)
                return browser.prototype._cachedResult;

            var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

            var isFirefox = typeof InstallTrigger !== 'undefined';

            var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

            var isChrome = !!window.chrome && !isOpera;

            var isIE = false || !!document.documentMode;

            var isEdge = !isIE && !!window.StyleMedia;

            return browser.prototype._cachedResult =
                isOpera ? 'Opera' :
                isFirefox ? 'Firefox' :
                isSafari ? 'Safari' :
                isChrome ? 'Chrome' :
                isIE ? 'IE' :
                isEdge ? 'Edge' :
                "Doesn't Exist";
        }
        var getInternetExplorerVersion=function() { 
        var ua = window.navigator.userAgent;
                var msie = ua.indexOf("MSIE ");
                var rv = -1;

                if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){               

                    if (isNaN(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))))) {
                        if (navigator.appName == 'Netscape') {
                            var ua = navigator.userAgent;
                            var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                            if (re.exec(ua) != null) {
                                rv = parseFloat(RegExp.$1);
                                alert(rv);
                            }
                        }
                        else {
                           return 0; //other browser
                        } 
                    }
                    else {
                        return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
                    }
                    return false;
                }
            }
            var getBrowserName=browser();
            this.isInternetExplorer=(getBrowserName.toLowerCase()==='ie') ? 1 : 0;
            this.getInternetExplorerVersion=(this.isInternetExplorer===1) ? (getInternetExplorerVersion()) : null;
    }


    Jasync.prototype.post=function(data){
        xhr.open('POST','echo.php',true);
        xhr.responseType=(this.isInternetExplorer===1 && this.getInternetExplorerVersion<=8) ? 'text': 'json' ;
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF8');
        xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
        xhr.setRequestHeader('Cache-Control','no-cache,no-store');
        xhr.onreadystatechange=function(){
            if(this.readyState===4){
                if(this.status>=200 && this.status<300 && this.status!==304){
                    var responseData=this.response || this.responseText;
                    alert(responseData);
                } 
            } 
        } 
        xhr.send(data);   
    }

    Jasync.prototype.get=function(){

    }

    Jasync.prototype.persistent=function(){

    }
