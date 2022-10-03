<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Project;
use Illuminate\Http\Request;

class ClientController extends Controller
{

    public function index(Request $request)
    {
        return inertia('Clients/Index', [
            'clients' => Client::withTrashed()
                ->when($request->search, function ($query, $search) {
                    $query->where('name', 'LIKE', "%{$search}%");
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
        $projects = Project::orderBy('name')->get();

        return inertia('Clients/Form', ['projects' => $projects]);
    }

    public function store(Request $request)
    {

        $valid = $request->validate([
            'name' => ['required', 'min:4'],
            'projects' => ['required', 'array', 'min:1']
        ]);

        $client = Client::create([
            'name' => $valid['name']
        ]);

        if ($client)
        {
            if ($client->projects()->sync($request->input('projects')))
                return redirect()->route('clients.index')->with('success', 'client Created');
            else
                $client->delete();
        }

        return back()->with('error', 'Something Went Wrong');
    }


    public function show(Client $client)
    {
        return inertia('Clients/Show', [
            'client' => $client,
            'projects' => $client->projects
        ]);
    }


    public function edit(Client $client)
    {
        return inertia('Clients/Form', ['client' => $client]);
    }


    public function update(Request $request, Client $client)
    {
        $valid = $request->validate([
            'name' => ['required', 'min:4']
        ]);


        if ($client->update($valid))
            return redirect()->route('clients.index')->with('success', 'client Updated');
        return back()->with('error', 'Something Went Wrong');
    }


    public function destroy(Client $client)
    {
        if ($client->delete())
        return redirect()->route('clients.index')->with('success', 'Record Deleted');
    }

    public function restore($client)
    {
        if (Client::onlyTrashed()->find($client)->restore())
            return back()->with('success', 'Record Restored');

        return back()->with('error', 'Something Went Wrong');
    }

    public function forceDelete($client)
    {
        if (Client::onlyTrashed()->find($client)->forceDelete())
            return back()->with('success', 'Record Permanently Deleted');

        return back()->with('error', 'Something Went Wrong');
    }

    public function assignProjectsForm(Client $client)
    {
        $projects = Project::all();

        return inertia('Clients/AssignProject', [
            'client' => $client,
            'projects' => $projects,
            'assigned' => $client->projects
        ]);
    }

    public function assignProjects(Request $request, Client $client)
    {
        $projects = $request->input('projects');

        $client->projects()->detach();

        foreach ($projects as $key => $project)
        {
            if (!$client->projects()->sync($projects[$key], false))
                return back()->with('error', 'Something Went Wrong');
        }

        return redirect()->route('clients.index')->with('success', 'projects Assigned');
    }
}
