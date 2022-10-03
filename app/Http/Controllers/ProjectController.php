<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    public function index(Request $request)
    {
        return inertia('Projects/Index', [
            'projects' => Project::withTrashed()
                ->when($request->search, function ($query, $search) {
                    $query->where('name', 'LIKE', "%{$search}%")
                        ->orWhere('starting_date', 'LIKE', "%{$search}%")
                        ->orWhere('deadline', 'LIKE', "%{$search}%");
                })
                ->orderBy($request->sortBy ?? 'id', $request->boolean('sortDesc') ? 'desc' : 'asc')
                ->paginate($request->perPage)
                ->withQueryString(),
            'filters' => [
                'search' => $request->search,
                'sortBy' => $request->sortBy,
                'sortDesc' => $request->sortDesc,
                'perPage' => $request->perPage,
            ]
        ]);
    }


    public function create()
    {
        return inertia('Projects/Form');
    }


    public function store(Request $request)
    {
        $valid = $request->validate([
            'name' => ['required', 'string'],
            'starting_date' => ['required', 'date', 'after_or_equal:today'],
            'deadline' => ['required', 'date', 'after_or_equal:today'],
        ]);

        if(Project::create($valid))
            return redirect()->route('projects.index')->with('success', 'Project created successfully');
    }


    public function show(Project $project)
    {
        return inertia('Projects/Show', [
            'project' => $project,
            'clients' => $project->clients
        ]);
    }


    public function edit(Project $project)
    {
        return inertia('Projects/Form', [
            'project' => $project
        ]);
    }


    public function update(Request $request, Project $project)
    {
        $valid = $request->validate([
            'name' => ['required', 'string'],
            'starting_date' => ['required'],
            'deadline' => ['required'],
        ]);

        if($project->update($valid))
            return redirect()->route('projects.index')->with('success', 'Project Updated successfully');
    }


    public function destroy(Project $project)
    {
        if ($project->delete())
            return redirect()->route('projects.index')->with('success', 'Project Deleted successfully');
    }

    public function restore($project)
    {
        if (Project::onlyTrashed()->find($project)->restore())
            return back()->with('success', 'Record Restored');
    }

    public function forceDelete($project)
    {
        if (Project::onlyTrashed()->find($project)->forceDelete())
            return back()->with('success', 'Record Permanently Removed');
    }

    public function assignClientsForm(Project $project)
    {
        $clients = Client::all();

        return inertia('Projects/AssignClient', [
            'project' => $project,
            'clients' => $clients,
            'assigned' => $project->clients
        ]);
    }

    public function assignClients(Request $request, Project $project)
    {
        $clients = $request->input('clients');

        $project->clients()->detach();

        foreach ($clients as $key => $client)
        {
            if (!$project->clients()->sync($clients[$key], false))
                return back()->with('error', 'Something Went Wrong');
        }

        return redirect()->route('projects.index')->with('success', 'Clients Assigned');
    }
}
