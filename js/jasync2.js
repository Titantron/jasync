var Jasync=function(){
    var w=window;
    this.http=(w.ActiveXObject) ? new ActiveXObject('Microsoft.XMLHTTP') : (w.XMLHttpRequest && new XMLHttpRequest()) || null;
}

Jasync.prototype.post=function(url,data,func){
        var http=this.http,
        p=p || {};
        p.url=url || null;
        
        p.data=function(){
                if(typeof FormData ==='undefined'){
                    return data;
                }else{
                    return data;
                } 
            }
        p.func=(func && typeof func==='function') ? func : null; 
            
        
        http.open('POST',p.url,true);
        http.setRequestHeader('x-requested-with','XMLHttpRequest');
        http.setRequestHeader('content-type','application/x-www-form-urlencoded');
        http.onreadystatechange=function(){
            this.readyState===4 && (this.status>=200 && this.status<300 && this.status!==304) && p.func(this.response); 
        }
        http.send(p.data()); 
}


