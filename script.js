let blocks = document.querySelectorAll('.block');
console.log(blocks);

let i = 0;

for (let block of blocks) {
    block.addEventListener('click', function start() {

        if (i % 2 == 0) {
            block.style.backgroundColor = 'red'
        } else {
            block.style.backgroundColor = 'green'
        }
        i++
        this.removeEventListener('click', start)
    })
}