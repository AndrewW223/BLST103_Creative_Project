document.addEventListener("DOMContentLoaded", () => {
    
    const placeholderText = "";
    const descVotingRights = `<img src="images/vra.jpg" class="panel-img" alt=""> <p>Prior to 1965, legislation like the Civil Rights Act of 1964 failed to secure comprehensive Black voting rights because it only applied to federal elections and continued to allow literacy tests. Grassroots efforts eventually resulted in the passage of the Voting Rights Act of 1965, which successfully removed literacy tests for federal, state, and local elections in several Southern states and 26 counties in North Carolina. It also provided federal examiners to register voters and observe elections, directed the U.S. Attorney General to initiate suits, and extended civil and criminal protections to qualified voters and those assisting them. This was a major victory for the Black Freedom Movement, but it still left more to be desired, as explained in other nodes (Mayes, "The Selma Movement").</p>`;
   
    const descBlackPower = `<img src="images/stokely.jpg" class="panel-img" alt=""> <p>Following the passage of the Voting Rights Act and other civil rights legislation, the Black freedom movement experienced a pivot driven by the "inertia of civil rights laws" and a growing frustration with slow change. During the 1966 Meredith March Against Fear, this tension between non-violent direct action and more militant approaches culminated when Stokely Carmichael popularized the slogan "Black Power". He criticized traditional integration as a process that merely assimilated "acceptable" individuals into the white middle class while leaving violent, institutionalized racism intact. Instead, Black Power called for true self-determination, demanding that Black communities completely control their own economic resources, political decisions, and law enforcement. Through urging Black people to reclaim their cultural identity and reject values and structures outside the Black experience, Carmichael laid important foundational ideology for new cultural movements (Carmichael 639-645; Mayes, "Black Power Lecture").</p>`;

    const descBlackArts = `<img src="images/arts.jpg" class="panel-img" alt=""> <p>From the political ideology of Black Power, the Black Arts Movement emerged as its "aesthetic and spiritual sister". Rather than appealing to white morality through traditional "protest" literature, this movement rejected European artistic standards and proposed a radical reordering of culture to speak directly to the needs, survival, and aspirations of Black America. Artists and intellectuals argued that a distinct "black aesthetic" must be developed, uniting ethics and aesthetics. People like LeRoi Jones, who established the Black Arts Repertoire Theatre School to bring revolutionary art directly into the streets of Harlem, created a wave of cultural nationalism that championed the idea that Black people constituted a distinct nation within America. Ultimately, the Black Arts Movement was a major advancement in uniting black culture (Neal 29-33; Mayes, "Black Music in the Era of Civil Rights and Black Power").</p>`;

    const descBlackPanthers = `<img src="images/panthers.jpg" class="panel-img" alt=""> <p>As the Black freedom movement moved into the ideology of Black Power popularized by Stokely Carmichael, the Black Panther Party for Self-Defense established a comprehensive ten-point program outlining their specific goals. Founded in Oakland, California, in 1966 by Huey Newton and Bobby Seale at Merritt College, the group's political orientation was both Black nationalist and leftist. While they believed in racial pride and raising Black consciousness, they also worked with white communists because they believed that capitalism was the true enemy, not white people. Furthermore, the Party expanded the scope of its activism by explicitly connecting the U.S. Black struggle to Hispanic, Asian-American, Native American, and broader Third World movements. Alongside Newton and Seale, the organization was led by prominent leaders such as Eldridge Cleaver, Kathleen Cleaver, Fred Hampton, and Elaine Brown, who stepped up as chair when Newton was exiled (Mayes, "Black Power Organizations and Muhammad Ali").</p>`;

    const descMillionMan = `<img src="images/million.jpg" class="panel-img" alt=""> <p>Held in Washington, D.C., on October 16, 1995, the Million Man March and its companion event, the Day of Absence, were a massive mobilization of the Black community on the eve of the 21st century. It was initiated by Minister Louis Farrakhan, centering on three core themes: atonement, reconciliation, and responsibility. The March specifically challenged Black men to stand up and assume an expanded, proactive responsibility for their families and communities, while Black women led the Day of Absence to organize and support the movement's goals locally. The organizers challenged the U.S. government and corporate America. The mission statement demanded government reparations for the Holocaust of African Enslavement, an end to regressive right-wing policies and the criminalization of Black leadership, and called on corporations to reinvest their profits into Black communities. Ultimately, the march wanted to create structural change, advocating for an independent Black political movement, a Black Economic Development Fund, and the continued practice of "operational unity" (Karenga 2-11).</p>`;

    const descBlackFeminism = `<img src="images/feminism.jpg" class="panel-img" alt=""> <p>Black feminism has consistently served as the ideological lifeblood of modern Black liberation movements by concentrating on the needs of the most marginalized and expanding the scope of the struggle. Moving beyond early civil rights framing, Black feminists established a multi-issue and anticapitalist agenda that confronted the intersections of racism, patriarchy, and state violence. This inclusive tradition was vital during the HIV/AIDS epidemic, where Black gay and queer organizers led the fight for treatment access and demanded visibility for Black LGBTQIA people within the broader radical tradition. Similarly, Black women have long pioneered reproductive justice and health activism, fighting against militarized rhetorics of "population bombs" and restrictive welfare policies that sought to regulate their bodies and families. The power of this grassroots organizing was demonstrated during the 1997 Million Woman March, where over two million women of African descent mobilized to demand human rights, spiritual renewal, and robust investments in housing and healthcare, while challenging the government's complicity in the crack cocaine epidemic. Ultimately, by championing an intersectional approach, Black feminism laid the intellectual and spiritual groundwork for contemporary struggles against mass incarceration and police violence (Campbell 86-88; Lloyd 9; Ransby 12-15).</p>`;

    const descBLM = `<img src="images/BLM.jpg" class="panel-img" alt=""> <p>The #BlackLivesMatter movement first emerged in 2013 as a social media hashtag in response to the murder of Trayvon Martin, exploding into a mass rebellion following the 2014 police killing of Michael Brown in Ferguson, Missouri. It became the defining slogan for a new generation of Black activists. Founded by Alicia Garza, Patrisse Cullors, and Opal Tometi, the network was deeply rooted in Black feminist and queer politics, intentionally expanding the struggle to affirm the dignity of all Black people, including women, the working class, and transgender people. Rejecting traditional, hierarchical leadership and the politics of respectability, the organizers decided to use a group-centered approach to combat anti-Black racism and state-sanctioned violence. Grounded in the principle that "Black love" is an act of resistance, the movement insists that true liberation requires embracing every facet of Black life and ensuring that no one is thrown under the bus for the sake of assimilation (Garza 21-25; Ransby 2-6).</p>`;
    var nodes = new vis.DataSet([
        { id: 1, x: -750, y: 0, label: '1965 Voting\nRights Act', description: descVotingRights },
        { id: 2, x: -350, y: 0, label: 'Stokely Carmichael\n& Black Power', description: descBlackPower },
        { id: 3, x: 0, y: -250, label: 'Black Panther\nParty', description: descBlackPanthers },
        { id: 4, x: 0, y: 250, label: 'Black Arts\nMovement', description: descBlackArts },
        { id: 6, x: 350, y: -150, label: 'Black\nFeminism', description: descBlackFeminism },
        { id: 7, x: 700, y: -350, label: '#BlackLivesMatter', description: descBLM },
        { id: 10, x: 350, y: 150, label: 'Million Man\nMarch', description: descMillionMan }
    ]);

    var edges = new vis.DataSet([
        { from: 1, to: 2, label: 'Sparked pivot to' },
        { from: 2, to: 3, label: 'Ideological foundation for' },
        { from: 2, to: 4, label: 'Cultural expression of' },
        { from: 2, to: 5, label: 'Inspired student activism' },
        { from: 2, to: 6, label: 'Provoked critique from' },
        { from: 3, to: 6, label: 'Gender politics debated by' },
        { from: 6, to: 7, label: 'Shifted leadership and focus toward' }, 
        { from: 3, to: 7, label: 'Evolved resistance against state violence' },
        { from: 6, to: 8, label: 'Expanded the scope of liberation to' }, 
        { from: 6, to: 9, label: 'Championed' },
        { from: 2, to: 10, label: 'Evolved into 1990s Nationalism', smooth: { type: 'curvedCW', roundness: 0.2 } }
    ]);

    var container = document.getElementById('mynetwork');
    var data = { nodes: nodes, edges: edges };
    
    var options = {
        nodes: { 
            shape: 'circle',
            widthConstraint: { minimum: 140, maximum: 140 },
            font: { size: 14, face: 'Helvetica Neue', color: '#FFFFFF', align: 'center' }, 
            borderWidth: 2,
            borderWidthSelected: 5, 
            color: { 
                background: '#8B4513', 
                border: '#5D4037',     
                highlight: { background: '#A0522D', border: '#5D4037' }, 
                hover: { background: '#A0522D', border: '#5D4037' }      
            },
            shadow: true,
            chosen: true 
        },
        edges: { 
            width: 3.5, 
            arrows: { to: { enabled: true, scaleFactor: 1.2 } },
            font: { 
                size: 13, 
                align: 'middle', 
                face: 'Helvetica Neue', 
                color: '#333333',    
                strokeWidth: 4, 
                strokeColor: '#D2B48C' 
            }, 
            color: { color: '#555555' }, 
            smooth: { type: 'continuous' },
            chosen: false 
        },
        physics: false, 
        interaction: { hover: true, zoomView: true }
    };

    var network = new vis.Network(container, data, options);

    network.on("hoverNode", function () { network.canvas.body.container.style.cursor = 'pointer'; });
    network.on("blurNode", function () { network.canvas.body.container.style.cursor = 'default'; });

    const infoPanel = document.getElementById('info-panel');
    const closeBtn = document.getElementById('close-panel-btn');
    const openBtn = document.getElementById('open-panel-btn');

    closeBtn.addEventListener('click', () => {
        infoPanel.classList.add('collapsed');
        openBtn.classList.remove('hidden');
    });

    openBtn.addEventListener('click', () => {
        infoPanel.classList.remove('collapsed');
        openBtn.classList.add('hidden');
    });

    network.on("click", function (params) {
        if (params.nodes.length > 0) {
            var nodeId = params.nodes[0];
            var clickedNode = nodes.get(nodeId);
            
            document.getElementById('default-msg').classList.add('hidden');
            document.getElementById('node-details').classList.remove('hidden');
            
            document.getElementById('panel-title').innerText = clickedNode.label.replace(/\n/g, ' ');
            document.getElementById('node-description').innerHTML = clickedNode.description;

            if (infoPanel.classList.contains('collapsed')) {
                infoPanel.classList.remove('collapsed');
                openBtn.classList.add('hidden');
            }
        } else {
            document.getElementById('default-msg').classList.remove('hidden');
            document.getElementById('node-details').classList.add('hidden');
            document.getElementById('panel-title').innerText = 'Explore the Movement';
        }
    });
});