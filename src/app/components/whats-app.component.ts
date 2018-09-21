import { Component } from '@angular/core';

@Component({
  selector: 'app-whats-app',
  templateUrl: './whats-app.html'
})
export class WhatsAppComponent {
  filter = 'SHOW_ALL';
  formVisibility = false;
  whats = [
    { _id: 1, name: 'React', def: 'a library', remember: true },
    { _id: 2, name: 'Vue', def: 'a library', remember: true },
    { _id: 3, name: 'Angular', def: 'a framework', remember: false }
  ];
  filterChange(filter){
      this.filter = filter;
  }
  toggleForm() {
    this.formVisibility = !this.formVisibility;
  }
  addWhat(payload) {
   
    const what = {
      _id: Date.now(),
      name: payload.name,
      def: payload.def,
      remember: false
    };
    this.whats.push(what);
  }
  toggleWhat(_id) {
    const what = this.whats.find(w => w._id === _id);
    what.remember = !what.remember;
  }

  removeWhat(_id) {
    const idx = this.whats.findIndex(w => w._id === _id);
    this.whats.splice(idx, 1);
  }

  get filteredWhats() {
    const { filter, whats } = this;
    if (filter === 'SHOW_FORGOT') return whats.filter(w => !w.remember);
    if (filter === 'SHOW_REMEMBERED') return whats.filter(w => w.remember);
    return whats;
  }
}
