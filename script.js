         // TAB LOGIC
        function openTab(evt, tabName) {
            let i, tabcontent, tablinks;
            
            // Hide all tab panels
            tabcontent = document.getElementsByClassName("tab-panel");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove("active");
            }

            // Deactivate all buttons
            tablinks = document.getElementsByClassName("tab-btn");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }

            // Show current panel and mark button as active
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }

        // MAP LOGIC
        const map = L.map('map', {
            scrollWheelZoom: false
        }).setView([-3.3, 104.5], 7);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(map);

        const culturalIcon = L.divIcon({
            className: 'custom-div-icon',
            html: "<div style='background-color:#800000; width:30px; height:30px; border-radius:50% 50% 50% 0; transform:rotate(-45deg); border:3px solid #FFD700; box-shadow:0 0 10px rgba(0,0,0,0.3)'></div>",
            iconSize: [30, 30],
            iconAnchor: [15, 30]
        });

        const locations = [
            { name: "Jembatan Ampera", coords: [-2.9916, 104.7634] },
            { name: "Gunung Dempo", coords: [-4.0155, 103.1280]},
            { name: "Pulau Kemaro", coords: [-2.9797, 104.8208] },
            { name: "Masjid Agung", coords: [-2.9879813824894335, 104.76019226649706]},
            { name: "Danau Ranau", coords: [-4.821722335697059, 103.91344362915397]},
            {name: "Sungai Mengkuang", coords: [-3.279568771417008, 104.35260181676645]}
        ];

        locations.forEach(loc => {
            L.marker(loc.coords, {icon: culturalIcon})
                .addTo(map)
                .bindPopup(`<h4 style="color:var(--primary);">${loc.name}</h4>`);
        });

        map.on('click', () => { if (!map.scrollWheelZoom.enabled()) map.scrollWheelZoom.enable(); });
  