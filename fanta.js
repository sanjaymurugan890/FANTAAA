

var tl = gsap.timeline({scrollTrigger:{
  trigger: ".two",
  start: "0% 95%",
  end:"37% 50%",
  scrub:true,
}})

tl.to("#fanta",{
  top:"120%",
  left:"7%",
},"orange")

tl.to("#orange2",{
  top:"150%",
  left: "7%",
},"orange")

tl.to("#orange",{
  top:"170%",
  right: "7%",
  width: "15%",
},"orange")
tl.to("#leaf",{
  top:"110%",
  left: "7%",
  rotate : "20deg",
  width: "15%",
},"orange")
tl.to("#leaf2",{
  top:"130%",
  left: "94%",
  rotate: "-210deg",
  width: "4%",
},"orange")

var tl2 = gsap.timeline({scrollTrigger:{
  trigger: ".three",
  start: "40% 95%",
  end:"70% 50%",
  scrub:true,
}})
tl2.from(".lemon",{
  rotate: "-90deg",
  top:"110%"
},"coc")
tl2.from("#cococola",{
  rotate:"95deg",
  top:"70%"
},"coc")
tl2.from("#pepsi",{
  rotate:"-95deg",
  top:"55%"
},"coc")

tl2.to("#fanta",{
  top:"250%",
  left:"43%",
},"cr")
tl2.to("#orange2",{
  rotate:"90deg",
  top:"225%",
  left:"48%",
  width:"31%",
},"cr")

