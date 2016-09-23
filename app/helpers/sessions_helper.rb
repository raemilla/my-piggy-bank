module SessionsHelper

def current_user
  parent_user || child_user
end

def parent_user
  @parent_user ||= Parent.find_by(id: session[:parent_id])
end

def child_user
  @child_user ||= Child.find_by(id: session[:child_id])
end

def parent?
  current_user.instance_of? Parent
end

def child?
  current_user.instance_of? Child
end

def login?
  !!current_user
end

def require_user
  redirect '/login' unless current_user
end

end
