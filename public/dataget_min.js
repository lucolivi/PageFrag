function getValueByInstruction(a){var c,b=a.split(";");for(c=0==b[0].indexOf("#")?$(b.shift()):$(document);b.length>0;){var d=b.shift().replace("]","").split("["),e=d[0],f=d[1];c.children(e).each(function(a,b){a==f&&(c=$(b))})}return c.text()}desiredElementsInstructions=[],window.onload=function(){$("body").append("<div class='dataget-nav-bar'><div class='dataget-nav-bar-title'>PageFrag</div></div>"),$(".dataget-nav-bar").append("<form action='setpage' method='post'><input type='hidden' value='"+targetPageUrl+"' name='pageUrl'/><input type='hidden' id='dataget-instructions' name='instructions'/><input type='submit' class='dataget-nav-bar-element' value ='Done'/></form>"),$(".dataget-selectable").mouseover(function(a){a.stopPropagation(),$("dataget-selectable-hover").removeClass("dataget-selectable-hover"),$(this).addClass("dataget-selectable-hover")}).mouseout(function(a){a.stopPropagation(),$(this).removeClass("dataget-selectable-hover")}).click(function(a){a.stopPropagation();for(var d,b=$(this).text(),c=$(this),e=[];;){if(e.push(c.prop("tagName")),c.addClass("dataget-selectable-target-element-chain"),c.is("html"))break;c=c.parent()}console.log(e);var g,f=[];for(d?(f.push("#"+d),e.pop(),g=$(f[0])):g=$(document);e.length>0;){var h=e.pop(),i=!1;g.children(h).each(function(a,b){if(!i){var c=$(b);c.hasClass("dataget-selectable-target-element-chain")&&(f.push(h+"["+a+"]"),i=!0),g=c}})}$(".dataget-selectable-target-element-chain").removeClass("dataget-selectable-target-element-chain");var j=f.join(";");console.log(j);var k=getValueByInstruction(j);if(b!=k)throw"Target element value and generated element value diverged";return $(".dataget-nav-bar").append("<div class='dataget-nav-bar-element'>"+k+"</div>"),desiredElementsInstructions.push(j),$("#dataget-instructions").val(JSON.stringify(desiredElementsInstructions)),!1}),console.log("Dataget loaded.")};