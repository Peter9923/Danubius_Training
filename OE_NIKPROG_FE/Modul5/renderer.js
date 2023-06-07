export class Renderer {
    renderList(array){
        let s = '';

        array.forEach(element => {
            s += '<li>';
            s += element.name;
            
            s += '<span class="badge rounded-pill '+ this.positionChecker(element.job) +' mx-2">'+ element.job +'</span>'
            
            s += '<span class="badge rounded-pill bg-secondary">'+ element.age +'</span>'

            s += '</li>';
        });

        return s;
    }

    renderTable(array){
        let s = '';
    
        array.forEach(element => {
        s += '<tr>'

        s += '<td>'+ element.name +'</td>'
        s += '<td>'+ '<span class="badge rounded-pill '+ this.positionChecker(element.job) +' mx-2">'+ element.job +'</span>' +'</td>'
        s += '<td>'+ '<span class="badge rounded-pill bg-secondary">'+ element.age +'</span>' +'</td>'

        s += '</tr>'
        });

        return s;
    }

    positionChecker(position) {
        let map = new Map();

        map.set('teacher','bg-primary')
        map.set('technical assistant','bg-success')
        map.set('university instructor','bg-danger')
        map.set('senior lecturer','bg-dark')
        map.set('registrar office worker','bg-info')
        map.set('system operator','bg-warning')

        map.set('default','bg-secondary')

        if(map.has(position))
            return map.get(position)
        else
            return map.get('default')
    }

    sortArray(array){
        array.sort((a,b) => {
            if(a.name < b.name)
                return -1;
            if(a.name > b.name)
                return 1;
            return 0;
        })
    }
}