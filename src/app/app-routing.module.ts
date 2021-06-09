import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PokemonGoComponent } from './pokemon-go/pokemon-go.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'student',component:StudentComponent},
  {path:'add',component:AddStudentComponent},
  {path: 'edit',component: EditStudentComponent}, 
  {path:'home',component:HomeComponent},
  {path: 'pokemon', component: PokemonComponent},
  {path: 'pokemonGo', component: PokemonGoComponent},
  {path:'**',component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
