fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const journeyBoard = document.getElementById('journey-board');

    data.assets.forEach(asset => {
      const assetDiv = document.createElement('div');
      assetDiv.className = 'asset';

      assetDiv.innerHTML = `
        <div class="asset-header">
          <span>${asset.title}</span>
          <span class="asset-arrow">➤</span>
        </div>
        <div class="asset-description">
          ${asset.description}
        </div>
      `;
      // Fetch the data from the JSON file
fetch('data.json')
.then(response => response.json())
.then(data => {
  const journeyBoard = document.getElementById('journey-board');

  // Loop through each asset and create its HTML structure
  data.assets.forEach(asset => {
    const assetDiv = document.createElement('div');
    assetDiv.className = 'asset';

    // Asset structure
    assetDiv.innerHTML = `
      <div class="asset-header">
        <span>${asset.title}</span>
        <span class="asset-arrow">➤</span>
      </div>
      <div class="asset-description">
        ${asset.description}
      </div>
    `;

    // Add interactivity to expand/collapse the description
    const arrow = assetDiv.querySelector('.asset-arrow');
    const description = assetDiv.querySelector('.asset-description');

    arrow.addEventListener('click', () => {
      if (description.style.display === 'none') {
        description.style.display = 'block';
        arrow.textContent = '▼'; // Change arrow to indicate expanded
      } else {
        description.style.display = 'none';
        arrow.textContent = '➤'; // Change arrow to indicate collapsed
      }
    });

    // Append the asset to the journey board
    journeyBoard.appendChild(assetDiv);
  });
})
.catch(error => console.error('Error loading JSON:', error));


      // Add expand/collapse functionality
      const arrow = assetDiv.querySelector('.asset-arrow');
      const description = assetDiv.querySelector('.asset-description');

      arrow.addEventListener('click', () => {
        description.style.display =
          description.style.display === 'none' ? 'block' : 'none';
        arrow.textContent = description.style.display === 'none' ? '➤' : '▼';
      });

      journeyBoard.appendChild(assetDiv);
    });
  });
