var imgs = [
  'https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2020/07/Nanotechnology-Medicine-Technology-July.jpg',
  'https://criticalcatalyst.com/wp-content/uploads/2021/05/nanotechnology_1.jpg',
  'https://images.squarespace-cdn.com/content/v1/57ed3edb37c58182f815c65f/1527090329377-RBJLHPVIZ1C68XW99RL2/shutterstock_652948648.jpg?format=1500w',
  'https://media.mehrnews.com/d/2018/01/31/4/2703805.jpg',
  'https://miro.medium.com/max/1400/1*b-6kdos2HXMiH9VE8AoxXA.png'
],
  n = imgs.length,
  current = n - 1,
  closedWidth = Math.floor(window.innerWidth / 10)

bg = document.getElementById('bg');

let texts = [
  `
  <div id="txt0" style="display:none;">
  <h3>Nanotechnology</h3>
      <p>
      Imagine what it is possible to do with many nanorobots that can be programmed for taking any physical shape, it could shape a vehicle, a boat, a building, or even a prosthesis.The possibilities are limited only by the imagination. And this is why it is the most promising emerging technology in the following years. 
      </br></br>Nanotechnology comprises the analysis, design, and development of technology at the nanoscale, there is a dilemma about to what extent it is nanoscale, and what it is not. At the moment, there is a consensus of a range from 1 to 100 nm.To put in perspective a human hair is about 75, 000 nm, a human blood cell is about 6, 000 nm across, and the Ebola virus is 1, 500nm long. The typical example of the use of nanotechnology is found in the manufacturing of microprocessors, both the chips of smartphones and laptops. The lithography manufacturing process has allowed the Core i5 - 1035G1 chip released in 2019 to have about 4800 million transistors, it is produced with technologies that operate in a range from 10 nm to 20 nm and is used in many commercial laptops. In this sense, it is believed that the number of transistors will increment year after year, therefore the performance of computers will do as well. But it is not the only application of this technology the scope is far beyond that point: there are health, industrial, energy, environmental, and material science applications. Thus the utility of the world of nano resides in the versatility and the scope of use cases. So the importance discussed in this essay focus on the versatility and scope of nanotechnology applications.
      </p>
      </div>`,
  ` <div id="txt1" style="display:none;">
      <p>
  Nanotechnology helps, in medical science, in the prevention, diagnosis, and treatment of many illnesses. In terms of prevention, nanosensors can evaluate the state of chemicals in our bodies reporting about the imbalance of vitamins and nutrients. In contrast, some nanomaterials allow identifying diseases when interacting with toxic substances in the body. Likewise, nanoparticles can encapsulate medicine and deliver it where it is needed in the body with unprecedented accuracy.
  </br></br>
The treatment of many severe illnesses is given by medicine that has serious side effects that affect negatively the quality of life of patients, for instance, patients with cancer treated with chemotherapy develop anemia, infections, fertility problems among others. Thus there are advances in the use of nanotubes and nanoparticles to help with cancer treatment, these nanotubes are effective tumor killers in patients with kidney or breast cancer, thus there is no damage to healthy tissue.
</br></br>
At industrial scale nanotechnology leads to new enhanced materials, many materials modified at the nanoscale can acquire visible new properties: water resistance, self-cleaning properties, wear resistance. And it is believed that these use cases are the exploring phase of this technology, which means that with a major development the use of nanomaterials will transform the building industry. 
  </p></div>`,
  ` <div id="txt2" style="display:none;">
      <p>
  The food industry is taking advantage of the benefits of modifying materials at the nanoscale, especially with food preservation, materials made with silver mixed with polymers enhance the quality of food packages allowing longer shelf life while preserving its taste.
  </br></br>
The same trend is following the energy production sector, the advances of technology at the molecular scale have ushered a new generation of efficient renewable energy devices. In this sense, the use of nanoparticles in solar cells is increasing the amount of energy that is absorbed from sunlight. On the other side, there are new batteries that can store more energy in less space, these are made with nanographene, some batteries for electric cars promise capabilities 4 times greater than conventional batteries with a cost of 77% lower.
</br></br>
Given these use cases, it is well known how the applications of nanodevices and nanomaterials have and will influence our society in many aspects, as was expressed, the development of these devices is in an early stage, so the future will be featuring devices with great adaptability to the conditions and environments in which they will operate. In this regard, there is a recent discovery where it is possible to create artificial atoms that could be used in any research or commercial product.
  </p></div>`,
  ` <div id="txt3" style="display:none;">
      <p>
  The possible utility of artificial atoms is unlimited, it is like restructuring from the building blocks of any physical object, even if it raises new challenges related to the effects in the nano and macro world, it is an exciting field of research that far exceeds our current capabilities to modify our environment and optimize the use of resources, especially environmental resources.
  </br></br>
How the last major application of nanostructures is in environmental preservation, this type of technology opens the door to a new dilemma, due to the high use of some toxic substances or materials in the manufacturing of nanostructures, thus there are some branches of nanoscience that have been proposing the use of natural components such as leaf plants as a way to reduce the pollution and contamination of the process involved in nanotechnology.
  </p></div>`,
  ` <div id="txt4" style="display:none;">
      <p>
  Therefore this technology is being used to clean up the environment through nanodevices that detect and treat impurities in water, there are new nanomaterials with nanopores that are being used to improve the process of water desalination and other materials that absorb toxic materials for example petroleum oil in rivers.
  </br></br>
In conclusion, nanotechnology is one of the most astonishing developments of the last years, and it is declared that will shape the future in many social sectors, however, it imposes an enormous effort in research and implementation and also creates new challenges due to the cost of manufacturing and environmental effects. For that reason, it is expected that as the technologies advances appear the cost of design and implementation decrease.
</p></div>`
]

for (var i = 0; i < n; i++) {

  var bgImg = document.createElement('div');
  bg.appendChild(bgImg);

  gsap.set(bgImg, {
    attr: { id: 'bgImg' + i, class: 'bgImg' },
    width: '100%',
    height: '100%',
    backgroundImage: 'url(' + imgs[i] + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  })

  var b = document.createElement('div');
  fg.appendChild(b);

  gsap.fromTo(b, {
    attr: { id: 'b' + i, class: 'box' },
    innerHTML: '<p>' + (i + 1) + '</p>' + texts[i],
    width: '100%',
    height: '100%',
    borderLeft: (i > 0) ? 'solid 1px #eee' : '',
    backgroundColor: 'rgba(250,250,250,0)',
    left: i * closedWidth,
    transformOrigin: '100% 100%',
    x: '100%'
  }, {
    duration: i * 0.15,
    x: 0,
    ease: 'expo.inOut'
  })

  b.onmouseenter = b.onclick = (e) => {
    if (Number(e.currentTarget.id.substr(1)) == current) return;
    texts.forEach((e, idx) => {
      document.getElementById("txt" + idx).style.display = "none";
    });
    var staggerOrder = !!(current < Number(e.currentTarget.id.substr(1)));
    current = Number(e.currentTarget.id.substr(1));
    gsap.to('.box', {
      duration: 0.5,
      ease: 'elastic.out(0.3)',
      left: (i) => (i <= current) ? i * closedWidth : window.innerWidth - ((n - i) * closedWidth),
      x: 0,
      stagger: staggerOrder ? 0.05 : -0.05
    })
    document.getElementById("txt" + current).style.display = "inline-block";
    bg.appendChild(document.getElementById('bgImg' + current))
    gsap.fromTo('#bgImg' + current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power1.inOut' })
    gsap.fromTo('#bgImg' + current, { scale: 1.05, rotation: 0.05 }, { scale: 1, rotation: 0, duration: 1.5, ease: 'sine' })
  }
}


window.onresize = (e) => {
  closedWidth = Math.floor(window.innerWidth / 10)
  gsap.set('.box', { x: 0, left: (i) => (i <= current) ? i * closedWidth : window.innerWidth - ((n - i) * closedWidth) })
}