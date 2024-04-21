AFRAME.registerComponent("tartget-ring",{
    init:function(){
        for(var i=1;i<=20;1++){
            var id = `ring${i}`
            var posX = (Math.random()*3000+(-1000))
            var posY = (Math.random()*2+(-1))
            var posZ = (Math.random()*3000+(-1000))
            var position = {x:posX,y:posY,z:posZ}
            this.createRings(id,position)
        }
    },
    crateRings:function(){
        var terrainE1=documnet.querySelector("#terrain")
        var ringE1=document.createElement("a-entity");
        ringE1.setAttribute("id",id)
        ringE1.setAttribute("position",position)
        ringE1.setAttribute("material","color","hash","#FF9100");
        ringE1.setAttribute("geometry",{primitive:"torus",radius:8});
        terrainE1.appendChild(ringE1);
    }
})