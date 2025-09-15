export default function DataSelector() {
  const containerSelector = document.createElement('div');
  containerSelector.className = 'dateSelector';
  containerSelector.innerHTML = `
    <div class = selector>

        <select class="form-select" aria-label="Default select example">
            <option selected>Data Check-in</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>  
        
        <select class="form-select" aria-label="Default select example">
            <option selected>Data Check-out</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>

        <select class="form-select" aria-label="Default select example">
            <option selected>Hóspedes</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
`  
return containerSelector;
}

